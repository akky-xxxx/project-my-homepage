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
