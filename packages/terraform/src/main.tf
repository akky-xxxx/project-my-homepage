terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

resource "random_id" "id" {
  byte_length = 4
}

locals {
  db_instance = "strapi-db-instance-${random_id.id.hex}"
}

provider "google" {
  credentials = file("${var.credentials}.json")

  project = var.project_id
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_cloud_run_service" "client" {
  name     = lookup(var.run_client, "name")
  location = var.region

  template {
    spec {
      container_concurrency = lookup(var.run_client, "concurrency")

      containers {
        image = lookup(var.run_client, "registry")

        resources {
          limits = {
            memory = lookup(var.run_client, "memory")
            cpu : lookup(var.run_client, "cpu")
          }
        }

        env {
          name  = "TEST"
          value = lookup(var.run_client, "env_test")
        }
      }
    }
  }
}

resource "google_cloud_run_service" "sg_server" {
  name     = lookup(var.run_sg_server, "name")
  location = var.region

  metadata {
    annotations = {
      "run.googleapis.com/ingress" = "internal"
    }
  }

  template {
    spec {
      container_concurrency = lookup(var.run_sg_server, "concurrency")

      containers {
        image = lookup(var.run_sg_server, "registry")

        resources {
          limits = {
            memory = lookup(var.run_sg_server, "memory")
            cpu : lookup(var.run_sg_server, "cpu")
          }
        }

        env {
          name  = "TEST"
          value = lookup(var.run_sg_server, "env_test")
        }
      }
    }
  }
}

resource "google_cloud_run_service" "strapi" {
  name     = lookup(var.run_strapi, "name")
  location = var.region

  template {
    spec {
      container_concurrency = lookup(var.run_strapi, "concurrency")

      containers {
        image = lookup(var.run_strapi, "registry")

        resources {
          limits = {
            memory = lookup(var.run_strapi, "memory")
            cpu : lookup(var.run_strapi, "cpu")
          }
        }

        env {
          name  = "TEST"
          value = lookup(var.run_strapi, "env_test")
        }
      }
    }
  }
}

data "google_iam_policy" "no_auth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "no_auth-client" {
  location = google_cloud_run_service.client.location
  project  = google_cloud_run_service.client.project
  service  = google_cloud_run_service.client.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}

resource "google_cloud_run_service_iam_policy" "no_auth-sg_server" {
  location = google_cloud_run_service.sg_server.location
  project  = google_cloud_run_service.sg_server.project
  service  = google_cloud_run_service.sg_server.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}

resource "google_cloud_run_service_iam_policy" "no_auth-strapi" {
  location = google_cloud_run_service.strapi.location
  project  = google_cloud_run_service.strapi.project
  service  = google_cloud_run_service.strapi.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}

resource "google_storage_bucket" "strapi" {
  name     = lookup(var.storage_strapi, "name")
  location = lookup(var.storage_strapi, "location")
}

resource "google_sql_database_instance" "db_instance-strapi" {
  name             = local.db_instance
  region           = var.region
  database_version = lookup(var.db_strapi, "version")

  settings {
    tier = "db-f1-micro"
  }
}

resource "google_sql_database" "db-strapi" {
  name     = lookup(var.db_strapi, "name")
  instance = google_sql_database_instance.db_instance-strapi.name
}

resource "google_sql_user" "users" {
  name     = lookup(var.db_strapi, "user")
  instance = google_sql_database_instance.db_instance-strapi.name
}