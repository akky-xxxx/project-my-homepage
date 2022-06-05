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
  credentials = file(var.project.credentials)
  project     = lookup(var.project, "project_id")
  region      = "us-central1"
  zone        = "us-central1-c"
}

module "modules" {
  source = "../../modules"

  random_id = random_id.id.hex

  # cloud run
  cloud_run_service_name          = "${lookup(var.run_client, "name")}-dev"
  cloud_run_container_concurrency = "100"
  cloud_run_registry              = lookup(var.run_client, "registry")
  cloud_run_memory                = "16Gi"
  cloud_run_cpu                   = "4000m"
  cloud_run_max_scale             = "50"
  cloud_run_sg_server_server      = var.run_sg_server
}
