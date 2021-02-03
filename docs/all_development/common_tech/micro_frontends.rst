.. _Micro-frontend applications (MFEs):

##################################
Micro-frontend applications (MFEs)
##################################

The purpose of this document is to provide an overview of how micro-frontend applications (MFEs) are developed, configured, and deployed with the Open edX ecosystem. Open edX MFEs are small React applications that can be built and deployed independently.

MFEs are dynamic client side rendered Javascript applications. MFE source code can be found in projects named ``frontend-app-*``. These projects leverage node.js for their build processes. They are supplied configuration, then run to build HTML, CSS, and Javascript. The static assets are then ready to be deployed and served statically.

To run an MFE locally you must install `node 12 <https://nodejs.org>`_ (with npm version 6.11 or higher). All MFEs offer the following commands:

.. code::

  npm install (install dependencies)
  npm start (development server)
  npm run lint
  npm run test
  npm run build (build static output)

Configuration with Environment Variables
----------------------------------------

Open edX MFEs expect a number of process environment variables (Accessible in node via ``process.env``) in order to properly configure authentication, routing to other parts of the system, etc. Each MFE has ``.env``, ``.env.development``, and ``.env.test`` files that are consumed by the MFE. The production .env file contains only null values – the build process should supply them via the command line prior to running ``npm run build``.

Example ``.env.development``:

.. code-block:: bash

  NODE_ENV='development'
  PORT=1995
  ACCESS_TOKEN_COOKIE_NAME='edx-jwt-cookie-header-payload'
  BASE_URL='localhost:1995'
  CREDENTIALS_BASE_URL='http://localhost:18150'
  CSRF_TOKEN_API_PATH='/csrf/api/v1/token'
  ECOMMERCE_BASE_URL='http://localhost:18130'
  LANGUAGE_PREFERENCE_COOKIE_NAME='openedx-language-preference'
  LMS_BASE_URL='http://localhost:18000'
  LOGIN_URL='http://localhost:18000/login'
  LOGOUT_URL='http://localhost:18000/login'
  MARKETING_SITE_BASE_URL='http://localhost:18000'
  ORDER_HISTORY_URL='localhost:1996/orders'
  REFRESH_ACCESS_TOKEN_ENDPOINT='http://localhost:18000/login_refresh'
  SEGMENT_KEY=null
  SITE_NAME='edX'
  USER_INFO_COOKIE_NAME='edx-user-info'

Overriding Brand Specific Elements
----------------------------------

MFEs contain Open edX branded headers, footers and style. To build a MFE to reflect the brand of the particular Open edX instance some npm dependencies are designed to be overridden. **Overriding packages must expose the same interface as the dependencies they are overriding**.

Example: for edx.org the Open edX @edx/frontend-component-header is overridden with @edx/frontend-component-header-edx using npm aliases (`introduced in npm version 6.9.0 <https://github.com/npm/rfcs/blob/latest/implemented/0001-package-aliases.md>`_). Example syntax below:

.. code-block:: bash

  # Syntax: npm install <package-name>@<type>:<branded-package>

  # npm package
  npm install @edx/frontend-component-header@npm:@edx/frontend-component-header-edx@latest

  # git repository
  npm install @edx/frontend-component-header@git:https://github.com/edx/frontend-component-header-edx.git

  # local folder
  npm install @edx/frontend-component-header@file:../path/to/local/module

A list overridable packages is being developed. Currently only `@edx/frontend-component-header <https://github.com/edx/frontend-component-header>`_ and `@edx/frontend-component-footer <https://github.com/edx/frontend-component-footer>`_ are designed to be overridden. See those repositories for the interfaces they expose.

Deployment
----------

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
