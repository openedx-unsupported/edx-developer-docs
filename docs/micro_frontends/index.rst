#########################################
Open edX Micro-frontend Developer's Guide
#########################################

The purpose of this guide is to provide an overview of how micro-frontend applications (MFEs) are developed, configured, and deployed with the Open edX ecosystem. Open edX MFEs are small React applications that can be built and deployed independently.

MFEs are dynamic client-side rendered JavaScript applications. MFE source code can be found in projects named ``frontend-app-*``. These projects leverage node.js for their build processes. They are supplied configuration, then run to build HTML, CSS, and JavaScript. The static assets are then ready to be deployed and served statically.

To run an MFE locally you must install `node 12 <https://nodejs.org>`_ (with npm version 6.11 or higher). All MFEs offer the following commands:

.. code::

  npm install (install dependencies)
  npm start (development server)
  npm run lint
  npm run test
  npm run build (build static output)

.. toctree::

    configuration_with_environment_variables.rst
    overriding_brand_specific_elements.rst
    react_app_i18n.rst
    deployment.rst
