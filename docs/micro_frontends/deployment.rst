**********
Deployment
**********

The basic deployment strategy:

- Run the build script with environment variables on the command line. Example:
  ``NODE_ENV=development BASE_URL=open.edx.org ETC=etc npm run build``
- ``dist/`` directory is created that contains the deployable artifacts.
- Copy the contents of ``dist/`` to a web server.
- Configure the platform to point at your MFE. (details on this coming soon)

Note: The following is edX-specific and depends upon automation set up in GoCD. A similar, more manual process will need to be defined for Open edX installations.

edX MFEs are deployed automatically upon updates to the master branch in Github. GoCD collects three materials: the MFE source code, .yml configuration, and pipeline scripts (`edX tubular <https://github.com/edx/tubular>`_).

.yml configuration contains:

- APP_CONFIG
- NPM_OVERRIDES
- S3_BUCKET_NAME

Relevant pipeline scripts (edX tubular):

- https://github.com/edx/tubular/blob/master/tubular/scripts/frontend_utils.py
- https://github.com/edx/tubular/blob/master/tubular/scripts/frontend_build.py
- https://github.com/edx/tubular/blob/master/tubular/scripts/frontend_deploy.py

The pipeline scripts perform a routine like below:

- Parse .yml configuration
- Install requirements in the MFE source via ``npm install``
- Check for NPM_OVERRIDES and install them via ``npm install @edx/pkg@npm:custom-pkg``
- Collect APP_CONFIG and transform it into command line form (``NODE_ENV=development BASE_URL=open.edx.org``)
- Build the static output with the APP_CONFIG: ``NODE_ENV=development BASE_URL=open.edx.org npm run build``
- Deploy static output to s3 using S3_BUCKET_NAME
