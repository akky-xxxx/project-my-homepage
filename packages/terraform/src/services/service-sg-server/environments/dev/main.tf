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
  cloud_run_service_name          = lookup(var.run_sg_server, "name")
  cloud_run_container_concurrency = lookup(var.run_sg_server, "concurrency")
  cloud_run_registry              = lookup(var.run_sg_server, "registry")
  cloud_run_memory                = lookup(var.run_sg_server, "memory")
  cloud_run_cpu                   = lookup(var.run_sg_server, "cpu")
  cloud_run_strapi_server         = var.run_strapi_server
  cloud_run_strapi_api_token      = var.run_strapi_api_token
}
