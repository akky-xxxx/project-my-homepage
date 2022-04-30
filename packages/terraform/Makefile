phony: fmt
fmt:
	cd src && terraform fmt

phony: validate
validate:
	cd src && terraform validate

phony: dev-plan
dev-plan:
	cd src && terraform plan -var-file dev.tfvars

phony: dev-apply
dev-apply:
	cd src && terraform apply -var-file dev.tfvars

phony: dev-destroy
dev-destroy:
	cd src && terraform destroy -var-file dev.tfvars

phony: dev-reset
dev-reset:
	cd src && terraform destroy -var-file dev.tfvars && terraform apply -var-file dev.tfvars
