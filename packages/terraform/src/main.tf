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
