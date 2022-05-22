resource "google_cloud_run_service" "sg_server" {
  name     = lookup(var.run_sg_server, "name")
  location = var.region

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
          name  = "STRAPI_SERVER"
          value = google_cloud_run_service.strapi.status[0].url
        }

        env {
          name  = "STRAPI_API_TOKEN"
          value = "strapi で token 発行後に cloud run 上で入力する"
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
