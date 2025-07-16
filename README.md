# Test Repository for Shared Library Issue

This repository is a test case to reproduce and validate an issue related to shared code across different serverless functions.

## 🧩 Why this exists?

In many scenarios, it's necessary to share code among multiple folders (e.g., serverless functions).  
The goal of the issue is to make it easy to include shared code when packaging and deploying.

## 💡 What is the proposed solution?

The idea is to support shared libraries under:
- `lib/python`
- `lib/nodejs`

Everything placed inside these folders should be **automatically included** in the generated zip archives for deployment.

## 📁 Repository structure

- The `olaris/` folder is a submodule that contains the actual implementation and resolution of the issue (from the [`openserverless-task`](https://github.com/fziviello/openserverless-task) repository).
- The rest of the code is a minimal example to test and verify that the shared code is correctly included during deployment.

## 🚀 How to run

Use the following command to deploy:

```bash
ops ide deploy