# main.tf

terraform {
  required_version = ">= 0.14"

  required_providers {
    google = ">= 3.3"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}

# #############################################
# #               Enable API's                #
# #############################################

# Enable Compute API
resource "google_project_service" "compute" {
  service            = "compute.googleapis.com"
  disable_on_destroy = false
}

# Enable Cloud SQL Admin API
resource "google_project_service" "sqladmin" {
  service            = "sqladmin.googleapis.com"
  disable_on_destroy = false
}

# Enable Cloud Run API
resource "google_project_service" "cloudrun" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
}

# Enable Artifact Registry API
resource "google_project_service" "artifactregistry" {
  service            = "artifactregistry.googleapis.com"
  disable_on_destroy = false
}

# Enable Cloud Build API
resource "google_project_service" "cloudbuild" {
  service            = "cloudbuild.googleapis.com"
  disable_on_destroy = false
}

# Enable Service Networking API
resource "google_project_service" "servicenetworking" {
  service            = "servicenetworking.googleapis.com"
  disable_on_destroy = false
}

resource "google_storage_bucket" "bucket" {
  name                     = var.gcs_bucket_name
  location                 = var.region
  force_destroy            = true
  public_access_prevention = "enforced"

  lifecycle_rule {
    condition {
      age = 3
    }
    action {
      type = "Delete"
    }
  }

  lifecycle_rule {
    condition {
      age = 1
    }
    action {
      type = "AbortIncompleteMultipartUpload"
    }
  }
}

# #############################################
# #               Enable Roles                #
# #############################################

resource "google_service_account" "pizze_service_account" {
  account_id   = "pizze-service-account"
  display_name = "Service Account"
}

resource "google_project_iam_member" "service-account-binding" {
  project = var.project_id
  role    = "roles/cloudsql.client"

  member = "serviceAccount:${google_service_account.pizze_service_account.email}"
}

resource "google_project_iam_member" "instance-user-binding" {
  project = var.project_id
  role    = "roles/cloudsql.instanceUser"

  member = "serviceAccount:${google_service_account.pizze_service_account.email}"
}

resource "google_project_iam_member" "log-writer-binding" {
  project = var.project_id
  role    = "roles/logging.logWriter"

  member = "serviceAccount:${google_service_account.pizze_service_account.email}"
}

# #############################################
# #               Enable SQL                  #
# #############################################

resource "google_sql_database_instance" "quickstart-instance" {
  name             = "quickstart-instance"
  database_version = "POSTGRES_14"
  region           = "us-central1"
  settings {
    tier = "db-custom-1-3840" # Adjust the tier based on your requirements
    backup_configuration {
      enabled = false
    }
    database_flags {
      name  = "cloudsql.iam_authentication"
      value = "on"
    }
  }
}

resource "google_sql_database" "quickstart_db" {
  name     = "quickstart_db"
  instance = google_sql_database_instance.quickstart-instance.name
}

# Create a PostgreSQL database user
resource "google_sql_user" "quickstart-service-account-user" {
  name     = "quickstart-service-account"
  instance = google_sql_database_instance.quickstart-instance.name
  type     = "CLOUD_IAM_SERVICE_ACCOUNT"
}

