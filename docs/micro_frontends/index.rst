#########################################
Open edX Micro-frontend Developer's Guide
#########################################

The purpose of this document is to provide an overview of how micro-frontend applications (MFEs) are developed, configured, and deployed with the Open edX ecosystem. Open edX MFEs are small React applications that can be built and deployed independently.

MFEs are dynamic client-side rendered JavaScript applications. MFE source code can be found in projects named ``frontend-app-*``. These projects leverage node.js for their build processes. They are supplied configuration, then run to build HTML, CSS, and JavaScript. The static assets are then ready to be deployed and served statically.

To run an MFE locally you must install `node 12 <https://nodejs.org>`_ (with npm version 6.11 or higher). All MFEs offer the following commands:

.. code::

  npm install (install dependencies)
  npm start (development server)
  npm run lint
  npm run test
  npm run build (build static output)

****************************************
Configuration with Environment Variables
****************************************

Open edX MFEs expect a number of process environment variables (Accessible in node via ``process.env``) in order to properly configure the application. This includes links to other parts of the system, branding elements like the site name and logos, cookie names, and authentication configuration details. Each MFE has ``.env``, ``.env.development``, and ``.env.test`` files that are consumed by the MFE. The production ``.env`` file contains only falsy values – the build process should supply them via the command line prefixing the ``npm run build`` command.

Production build example::

  SITE_NAME="My Site Name" npm run build

The above would only set the SITE_NAME - suitable values for all the other environment variables should be supplied as well.

Required Environment Variables
==============================

All environment variables in this section are required for Open edX micro-frontends.

A note on micro-frontend-specific environment variables
-------------------------------------------------------

Individual micro-frontends may depend on other environment variables not on this list.  Those variables will be documented in the README files in individual micro-frontend repositories, but can be specified on the command line in the same way as described above.

Fundamentals
------------

``NODE_ENV``

Example: ``production`` | ``development`` | ``test``

Used by both the build process and application to determine what type of environment we're running. Valid values are "development", "test", and "production". All production-like environments should use "production", as this removes development warnings and checks, and can enable code optimizations for many dependencies like React. "development" is used by local development servers (i.e., webpack-dev-server, loaded with ``npm start``), and "test" is used by MFE test suites (such as `jest <https://jestjs.io/>`_) run with ``npm run test``.

``PUBLIC_PATH``

Example: ``/``
Used by both the build process and application to set the path of the application.  Should include an initial forward slash ``/``.  Will default to ``/`` if not specified.

``BASE_URL``

Example: ``https://new-mfe.example.com``

The fully-qualified URL to the micro-frontend being built. Used by frontend-platform as part of authentication, as well as by many applications for internal links.  The above example is on a sub-domain, but micro-frontends can be configured with a path LMS as well.

Internationalization
--------------------

``LANGUAGE_PREFERENCE_COOKIE_NAME``

Example: ``example-language-preference``

The name of the cookie where the user's language preferences should be stored.

Service URLs
------------

``CREDENTIALS_BASE_URL``

Example: ``https://credentials.example.com``

The fully-qualified URL of the `Credentials Service <https://github.com/edx/credentials>`_ in the target environment.

``DISCOVERY_API_BASE_URL``

Example: ``https://discovery.example.com``

The fully-qualified URL of the `Course Discovery Service <https://github.com/edx/course-discovery>`_ for the target environment.

``PUBLISHER_BASE_URL``

Example: ``https://publisher.example.com``
Status: DEPRECATED

**This should be considered deprecated and will be removed from a future release until such time as publisher itself is included in an Open edX release.** The fully-qualified URL of the `Publisher Micro-frontend <https://github.com/edx/frontend-app-publisher>`_.  Today this is only used by micro-frontends that are not offically supported in any Open edX release, such as the `Support Tools Micro-frontend <https://github.com/edx/frontend-app-support-tools>`_.

``ECOMMERCE_BASE_URL``

``Example: https://ecommerce.example.com``

The fully-qualified URL of the `Ecommerce Service <https://github.com/edx/ecommerce>`_ in the target environment.

``LMS_BASE_URL``

Example: ``https://courses.example.com``

The fully-qualified URL to the LMS in the target environment.

``LOGIN_URL``

Example: ``https://courses.example.com/login``

The fully-qualified URL to the login page in the target environment.

``LOGOUT_URL``

Example: ``https://courses.example.com/logout``

The fully-qualified URL to the API endpoint in the target environment which performs a user logout.

``STUDIO_BASE_URL``

Example: ``https://studio.example.com``

The fully-qualified URL of Studio in the target environment. This is often used by micro-frontends from which educators may wish to go edit course content, such as `frontend-app-learning <https://github.com/edx/frontend-app-learning>`_

``MARKETING_SITE_BASE_URL``

Example: ``https://www.example.com``
Status: DEPRECATED

**This is required, but will be removed in a future release.  Do not use in new code.** The fully-qualified URL of the environment's marketing site.  Today this is used by frontend-app-account to link to a demographics collection page, and also as a base URL for optimizely experiment scripts. Use cases in frontend-app-account will be refactored to use different environment variables, since neither use case has anything to do with marketing.

``ORDER_HISTORY_URL``

Example: ``https://orders.example.com``

The fully-qualified URL to the `Order History page <https://github.com/edx/frontend-app-ecommerce>`_.  This is often used in a user menu in the header of micro-frontends.

Analytics
---------

``SEGMENT_KEY``

Example: ``ABCDEFGHIJKLMNOPQRSTUVWXYZ123456``

An implementation-specific environment variable which, when configured, enables integration with Segment, a user analytics and data management vendor. 32 characters.

Authentication
--------------

``ACCESS_TOKEN_COOKIE_NAME``

Example: ``example-jwt-cookie-header-payload``

The name of a cookie where JWT authentication data should be stored.

``USER_INFO_COOKIE_NAME``

Example: ``example-user-info``

The name of the cookie where user-specific information should be stored.

``REFRESH_ACCESS_TOKEN_ENDPOINT``

Example: ``https://courses.example.com/login_refresh``

The fully-qualified URL of the endpoint which allows the micro-frontend to refresh a user's JWT authentication.  The inconsistency in naming with other fully-qualified URL environment variables is unfortunate.

``CSRF_TOKEN_API_PATH``

Example: ``/csrf/api/v1/token``

The path of the service's CSRF token API endpoint.  This gets prefixed with the domain of a request requiring CSRF protection.  This token is added to the X-CSRFToken header on outgoing requests.

Branding
--------

``SITE_NAME``

Example: ``Your Site Name Here``

The user-facing name of the site.

``LOGO_URL``

Example: ``https://edx-cdn.org/v3/default/logo.svg``

The fully-qualified URL of the site's logo file suitable for use in the application's header.

``LOGO_TRADEMARK_URL``

Example: ``https://edx-cdn.org/v3/default/logo-trademark.svg``

The fully-qualified URL of the site's logo suitable for use in a footer. This is often a logo with a trademark such as (R) or (TM).

``LOGO_WHITE_URL``

Example: ``https://edx-cdn.org/v3/default/logo-white.svg``

The fully-qualified URL of a white version of the logo suitable for dark backgrounds.

``FAVICON_URL``

Example: ``https://edx-cdn.org/v3/default/favicon.ico``

The URL to the favicon.ico file to be used for the site.  This will be added into the index.html file that serves the micro-frontend at build-time.

**********************************
Overriding Brand Specific Elements
**********************************

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
