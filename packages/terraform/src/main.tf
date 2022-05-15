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
          name  = "APP_KEYS"
          value = lookup(var.run_strapi, "app_keys")
        }

        env {
          name  = "JWT_SECRET"
          value = lookup(var.run_strapi, "jwt_secret")
        }

        env {
          name  = "API_TOKEN_SALT"
          value = lookup(var.run_strapi, "api_token_salt")
        }

        env {
          name  = "ADMIN_JWT_SECRET"
          value = lookup(var.run_strapi, "admin_jwt_secret")
        }

        env {
          name  = "CLOUD_STORAGE_BUCKET_NAME"
          value = google_storage_bucket.strapi.name
        }

        env {
          name  = "CLOUD_SQL_SOCKET"
          value = "/cloudsql/${google_sql_database_instance.db_instance-strapi.connection_name}"
        }

        env {
          name  = "CLOUD_SQL_NAME"
          value = google_sql_database.db-strapi.name
        }

        env {
          name  = "CLOUD_SQL_USERNAME"
          value = google_sql_user.users.name
        }

        env {
          name  = "CLOUD_SQL_PASSWORD"
          value = google_sql_user.users.password
        }
      }
    }

    metadata {
      annotations = {
        "run.googleapis.com/cloudsql-instances" = google_sql_database_instance.db_instance-strapi.connection_name
        "run.googleapis.com/client-name"        = "terraform"
      }
    }
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
  name          = lookup(var.storage_strapi, "name")
  location      = lookup(var.storage_strapi, "location")
  force_destroy = true
}

resource "google_sql_database_instance" "db_instance-strapi" {
  name             = "strapi-db-instance-${random_id.id.hex}"
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
  password = lookup(var.db_strapi, "pass")
  instance = google_sql_database_instance.db_instance-strapi.name
}