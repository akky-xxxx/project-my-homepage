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
          name  = "NEXT_PUBLIC_SG_SERVER"
          value = google_cloud_run_service.sg_server.status[0].url
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
