resource "google_cloud_run_service" "client" {
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
          name  = "NEXT_PUBLIC_SG_SERVER"
          value = var.cloud_run_sg_server_server
        }

        env {
          name  = "NEXT_PUBLIC_PRODUCTION_ENVIRONMENT"
          value = var.cloud_run_env_production
        }

        env {
          name  = "NEXT_PUBLIC_TITLE"
          value = " | ${var.cloud_run_env_production}}"
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = "1"
        "autoscaling.knative.dev/maxScale" = var.cloud_run_max_scale
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
