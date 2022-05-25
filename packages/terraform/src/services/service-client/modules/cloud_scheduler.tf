resource "google_cloud_scheduler_job" "job" {
  name        = "polling-of-service-client"
  description = "don't let it idle the service"
  schedule    = "*/1 * * * *"

  retry_config {
    retry_count = 1
  }

  http_target {
    http_method = "GET"
    uri         = "${google_cloud_run_service.client.status[0].url}/api/health_check"
  }
}
