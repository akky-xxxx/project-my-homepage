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

resource "google_cloud_run_service_iam_policy" "no_auth-sg_server" {
  location = google_cloud_run_service.sg_server.location
  project  = google_cloud_run_service.sg_server.project
  service  = google_cloud_run_service.sg_server.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}
