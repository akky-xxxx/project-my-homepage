resource "google_cloud_run_service" "sg_server" {
  name     = var.cloud_run_service_name
  location = "asia-northeast1"

  template {
    spec {
      container_concurrency = var.cloud_run_container_concurrency

      containers {
        image = var.cloud_run_registry

        resources {
          limits = {
            memory = var.cloud_run_memory
            cpu : var.cloud_run_cpu
          }
        }

        env {
          name  = "STRAPI_SERVER"
          value = var.cloud_run_strapi_server
        }

        env {
          name  = "STRAPI_API_TOKEN"
          value = var.cloud_run_strapi_api_token
        }
      }
    }
  }
}

resource "google_cloud_run_service_iam_policy" "no_auth-sg_server" {
  location = google_cloud_run_service.sg_server.location
  project  = google_cloud_run_service.sg_server.project
  service  = google_cloud_run_service.sg_server.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}
