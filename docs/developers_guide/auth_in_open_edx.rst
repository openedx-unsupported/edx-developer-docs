Open edX Authentication
=======================

-  .. rubric:: `Overview <#OpenedXAuthentication-Overview>`__
      :name: overview

-  .. rubric:: `Defined Terms <#OpenedXAuthentication-DefinedTerms>`__
      :name: defined-terms

   -  .. rubric:: `Authentication
         (AuthN) <#OpenedXAuthentication-Authentication(Au>`__
         :name: authentication-authn

   -  .. rubric:: `Authorization
         (AuthZ) <#OpenedXAuthentication-Authorization(Aut>`__
         :name: authorization-authz

   -  .. rubric:: `Independently Deployable Application
         (IDA) <#OpenedXAuthentication-IndependentlyDepl>`__
         :name: independently-deployable-application-ida

   -  .. rubric:: `OAuth 2.0
         (OAuth2) <#OpenedXAuthentication-OAuth2.0(OAuth2)>`__
         :name: oauth-2.0-oauth2

   -  .. rubric:: `OpenID Connect
         (OIDC) <#OpenedXAuthentication-OpenIDConnect(OID>`__
         :name: openid-connect-oidc

   -  .. rubric:: `JSON Web Token
         (JWT) <#OpenedXAuthentication-JSONWebToken(JWT)>`__
         :name: json-web-token-jwt

   -  .. rubric:: `Identity Provider
         (idP) <#OpenedXAuthentication-IdentityProvider(>`__
         :name: identity-provider-idp

-  .. rubric:: `Current Auth
      Situation <#OpenedXAuthentication-CurrentAuthSituat>`__
      :name: current-auth-situation

   -  .. rubric:: `User Auth
         Methods <#OpenedXAuthentication-UserAuthMethods>`__
         :name: user-auth-methods

      -  .. rubric:: `OAuth 2.0 & OpenID
            Connect <#OpenedXAuthentication-OAuth2.0&OpenIDCo>`__
            :name: oauth-2.0-openid-connect

         -  .. rubric:: `Why is OIDC being
               deprecated? <#OpenedXAuthentication-WhyisOIDCbeingdep>`__
               :name: why-is-oidc-being-deprecated

         -  .. rubric:: `What uses OIDC at
               present? <#OpenedXAuthentication-WhatusesOIDCatpre>`__
               :name: what-uses-oidc-at-present

         -  .. rubric:: `Discovery <#OpenedXAuthentication-Discovery>`__
               :name: discovery

         -  .. rubric:: `ECommerce <#OpenedXAuthentication-ECommerce>`__
               :name: ecommerce

         -  .. rubric:: `Credentials <#OpenedXAuthentication-Credentials>`__
               :name: credentials

         -  .. rubric:: `Insights <#OpenedXAuthentication-Insights>`__
               :name: insights

      -  .. rubric:: `OAuth 2.0 & Bearer
            Token <#OpenedXAuthentication-OAuth2.0&BearerTo>`__
            :name: oauth-2.0-bearer-token

      -  .. rubric:: `OAuth 2.0 &
            JWT <#OpenedXAuthentication-OAuth2.0&JWT>`__
            :name: oauth-2.0-jwt

         -  .. rubric:: `Restricted Client
               Applications <#OpenedXAuthentication-RestrictedClientA>`__
               :name: restricted-client-applications

            -  .. rubric:: `Details <#OpenedXAuthentication-Details>`__
                  :name: details

            -  .. rubric:: `Planned
                  Deprecation <#OpenedXAuthentication-PlannedDeprecatio>`__
                  :name: planned-deprecation

   -  .. rubric:: `Other LMS
         Auth <#OpenedXAuthentication-OtherLMSAuth>`__
         :name: other-lms-auth

      -  .. rubric:: `LMS as OpenID
            idP <#OpenedXAuthentication-LMSasOpenIDidP>`__
            :name: lms-as-openid-idp

      -  .. rubric:: `Social (and Other)
            Authentication <#OpenedXAuthentication-Social(andOther)A>`__
            :name: social-and-other-authentication

   -  .. rubric:: `Server-to-Server
         Auth <#OpenedXAuthentication-Server-to-ServerA>`__
         :name: server-to-server-auth

      -  .. rubric:: `Client Credentials
            Grant <#OpenedXAuthentication-ClientCredentials>`__
            :name: client-credentials-grant

   -  .. rubric:: `Relevant
         Code <#OpenedXAuthentication-RelevantCode>`__
         :name: relevant-code

      -  .. rubric:: `Repositories <#OpenedXAuthentication-Repositories>`__
            :name: repositories

         -  .. rubric:: `django-oauth2-provider
               (DOP) <#OpenedXAuthentication-django-oauth2-pro>`__
               :name: django-oauth2-provider-dop

         -  .. rubric:: `edx-oauth2-provider <#OpenedXAuthentication-edx-oauth2-provid>`__
               :name: edx-oauth2-provider

         -  .. rubric:: `django-oauth2-toolkit
               (DOT) <#OpenedXAuthentication-django-oauth2-too>`__
               :name: django-oauth2-toolkit-dot

         -  .. rubric:: `auth-backends <#OpenedXAuthentication-auth-backends>`__
               :name: auth-backends

         -  .. rubric:: `rest-framework-jwt <#OpenedXAuthentication-rest-framework-jw>`__
               :name: rest-framework-jwt

         -  .. rubric:: `python-social-auth <#OpenedXAuthentication-python-social-aut>`__
               :name: python-social-auth

         -  .. rubric:: `django-oauth-plus <#OpenedXAuthentication-django-oauth-plus>`__
               :name: django-oauth-plus

         -  .. rubric:: `django-openid-auth <#OpenedXAuthentication-django-openid-aut>`__
               :name: django-openid-auth

      -  .. rubric:: `Edx-platform
            Code <#OpenedXAuthentication-Edx-platformCode>`__
            :name: edx-platform-code

         -  .. rubric:: `openedx.core.djangoapps.oauth_dispatch <#OpenedXAuthentication-openedx.core.djan>`__
               :name: openedx.core.djangoapps.oauth_dispatch

         -  .. rubric:: `openedx.core.djangoapps.external_auth <#OpenedXAuthentication-openedx.core.djan>`__
               :name: openedx.core.djangoapps.external_auth

         -  .. rubric:: `common.djangoapps.third_party_auth <#OpenedXAuthentication-common.djangoapps>`__
               :name: common.djangoapps.third_party_auth

-  .. rubric:: `Desired Future Auth
      Situation <#OpenedXAuthentication-DesiredFutureAuth>`__
      :name: desired-future-auth-situation

   -  .. rubric:: `Scopes <#OpenedXAuthentication-Scopes>`__
         :name: scopes

-  .. rubric:: `More
      Information <#OpenedXAuthentication-MoreInformation>`__
      :name: more-information

   -  .. rubric:: `Some Relevant
         Tickets <#OpenedXAuthentication-SomeRelevantTicke>`__
         :name: some-relevant-tickets

.. _overview-1:

Overview
========

This document details the methods used to authenticate users in edX
applications.

.. _defined-terms-1:

Defined Terms
=============

.. _authentication-authn-1:

Authentication (AuthN)
~~~~~~~~~~~~~~~~~~~~~~

Authentication is the verification of the identity of a user, which
typically happens at a “login” application point.

.. _authorization-authz-1:

Authorization (AuthZ)
~~~~~~~~~~~~~~~~~~~~~

Authorization is the granting of permission of a certain user to perform
specific operations in an application. A user can also delegate an
application to be authorized to perform operations on their behalf
without being logged in/authenticated - indeed that’s the basis of
OAuth.

.. _independently-deployable-application-ida-1:

Independently Deployable Application (IDA)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An internal edX definition used to describe separate applications that
make up a complete OpenEdx installation. Examples of IDAs are:
edx-platform/edxapp, Insights, ECommerce, Credentials, etc,

.. _oauth-2.0-oauth2-1:

OAuth 2.0 (OAuth2)
~~~~~~~~~~~~~~~~~~

An authorization framework that enables applications to obtain limited
access to user accounts on an HTTP service. For an explanation, see
https://aaronparecki.com/oauth-2-simplified/

For edX, the LMS acts as authorization server and other IDAs use the LMS
to automatically login IDA users.

.. _openid-connect-oidc-1:

OpenID Connect (OIDC)
~~~~~~~~~~~~~~~~~~~~~

From https://openid.net/specs/openid-connect-discovery-1_0.html :

OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0
[RFC6749] protocol. It enables Clients to verify the identity of the
End-User based on the authentication performed by an Authorization
Server, as well as to obtain basic profile information about the
End-User in an interoperable and REST-like manner.

.. _json-web-token-jwt-1:

JSON Web Token (JWT)
~~~~~~~~~~~~~~~~~~~~

From https://jwt.io/introduction/:

JSON Web Token (JWT) is an open standard (`RFC
7519 <https://tools.ietf.org/html/rfc7519>`__) that defines a compact
and self-contained way for securely transmitting information between
parties as a JSON object. This information can be verified and trusted
because it is digitally signed. JWTs can be signed using a secret (with
the HMAC algorithm) or a public/private key pair using RSA.

For edX, JWT (with OAuth2) provides an alternative way to OpenID Connect
(with OAuth2) to authenticate a user.

.. _identity-provider-idp-1:

Identity Provider (idP)
~~~~~~~~~~~~~~~~~~~~~~~

From https://en.wikipedia.org/wiki/Identity_provider :

An Identity Provider, also known as Identity Assertion Provider, can:

-  eprovide identifiers for users looking to interact with a system

-  assert to such a system that such an identifier presented by a user
   is known to the provider

-  possibly provide other information about the user that is known to
   the provider

For edX, the LMS acts as an idP for all other surrounding IDAs,
providing information about the identity of the user to the other IDAs
for account creation purposes.

.. _current-auth-situation-1:

Current Auth Situation
======================

What IDAs use what authentication method? What authentication methods
are supported?

.. _user-auth-methods-1:

User Auth Methods
~~~~~~~~~~~~~~~~~

There are several authentication methods used by OpenEdx IDAs. The
methods are all built on top of OAuth 2.0 - but the typical
authorization prompt is disabled to make the authentication seamless.
It’s the “trusted client” functionality in edx-oauth2-provider that
disables the prompt.

The LMS acts as the identity provider (idP) for all these OAuth2-based
authentication methods. The urls for both OAuth2/OpenID Connect and
OAuth2/JWT are added to the LMS here:

https://github.com/edx/edx-platform/blob/master/lms/urls.py#L841-L854

To see a list of all authorized OAuth2 clients, follow these
instructions:

`Who's in the list of approved edx-platform LMS OAuth2
clients? <file:////wiki/spaces/PLAT/pages/162743745>`__

.. _oauth-2.0-openid-connect-1:

OAuth 2.0 & OpenID Connect
---------------------------

OAuth2/OIDC is deprecated - but it is the most-used method of user
authentication at present.

.. _why-is-oidc-being-deprecated-1:

Why is OIDC being deprecated?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Python module we use for OAuth2/OIDC is django-oauth2-provider
(DOP). However, support for the module has been abandoned and the
platform needs to use the supported django-oauth-toolkit (DOT) module in
the future. But DOT does \ **not** support OIDC. So a choice had to be
made & the architecture team decided that since OAuth2/JWT meets our
needs and is supported by DOT, we'll use OAuth2/JWT instead.

.. _what-uses-oidc-at-present-1:

What uses OIDC at present?
^^^^^^^^^^^^^^^^^^^^^^^^^^

The IDAs which use this auth method with LMS as an idP are:

-  Discovery

-  ECommerce

-  Credentials

-  Insights

How does one determine which authentication method is used by a Django
application? If you check the AUTHENTICATION_BACKENDS Django setting,
you’ll find the ordered authentication methods. The
auth_backends.backends.EdXOpenIdConnect backend is the OAuth2/OIDC
backend. Below are links to each IDA’s settings:

.. _discovery-1:

Discovery
^^^^^^^^^

https://github.com/edx/course-discovery/blob/19b31827a2417ddd8d3c7cb8b2817ec12a0cd60c/course_discovery/settings/base.py#L239-L243

.. _ecommerce-1:

ECommerce
^^^^^^^^^

https://github.com/edx/ecommerce/blob/422c862d79822d3be09cce23f902e3eaa485c975/ecommerce/settings/base.py#L438

.. _credentials-1:

Credentials
^^^^^^^^^^^

https://github.com/edx/credentials/blob/f890e7971789e44d6ecde21c5b786ebcc7c29d94/credentials/settings/base.py#L193-L196

.. _insights-1:

Insights
^^^^^^^^

https://github.com/edx/edx-analytics-dashboard/blob/4144ed83f7e766fef6eb38d077f68bfd5c37dd84/analytics_dashboard/settings/base.py#L332-L336

.. _oauth-2.0-bearer-token-1:

OAuth 2.0 & Bearer Token
-------------------------

Currently, only the mobile applications (iOS and Android) use `this
method <https://tools.ietf.org/html/rfc6750>`__. In this method, the LMS
issues a token to the mobile apps and the mobile apps include this token
in their header when hitting IDA endpoints. The IDAs verify the token
and either service or reject the request, based on the token validity.
The communications between the browser, LMS, and IDA must all use TLS in
order to keep the token secure, as anyone with the token can make a
restricted IDA request.

.. _oauth-2.0-jwt-1:

OAuth 2.0 & JWT
----------------

This auth method is the supported and recommended one. It uses JSON web
tokens (JWTs) on top of OAuth 2.0 to provide authentication - and is a
replacement for OAuth2/OIDC. There is a custom Django authentication
backend for this auth - it’s: auth_backends.backends.EdXOAuth2

For an example on how to perform API authentication via JWT, see this
OEP: \ https://github.com/edx/edx-platform/blob/master/openedx/core/djangoapps/oauth_dispatch/docs/decisions/0003-use-jwt-as-oauth-tokens-remove-openid-connect.rst

The edX implementation of this auth method currently uses a shared
secret to sign the encoded JWTs, using symmetric encryption for the
signature only. This shared secret requires downtime to change it, which
is non-optimal. We’d like to move instead to using a key pair to sign
the encoded JWTs, using asymmetric encryption for the signature. The idP
public key would be discovered by clients - the method is detailed in
this
`document <https://docs.google.com/document/d/1uqFrFZoZE68et8HIBb-fbp1jAlfpbalvpDRVjjJkNkM/edit>`__.

.. _restricted-client-applications-1:

Restricted Client Applications
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This method uses OAuth 2.0 & JWT as above. However, the JWTs which are
handed out to clients are pre-expired, meaning they can't be used to
perform any actions on any IDA service. The expired JWT is used only to
provide identity details about a particular LMS user, such as username
and email address. Other systems use this restricted client
functionality in order to verify on their system that one of their users
actually is the edX user which they claim to be.

.. _details-1:

Details
'''''''

To find out which applications are restricted applications, issue the
following SQL in the appropriate MySQL read replica DB:

select id, name, client_type, authorization_grant_type from
oauth2_provider_application where id in (select application_id from
oauth_dispatch_restrictedapplication);

The tokens themselves will show up in the DB with an UNIX-epoch-like
"expires" value:

mysql> select \* from oauth2_provider_accesstoken where
application_id=177 limit 1;

+----------+--------------------------------+----------------------------+---------------+----------------+---------+

\| id \| token \| expires \| scope \| application_id \| user_id \|

+----------+--------------------------------+----------------------------+---------------+----------------+---------+

\| 14237520 \| VlCdo3xXwdDTfkMzz1BlWQdiniIbRE \| 1970-01-01
00:00:00.000000 \| profile email \| 177 \| 115436 \|

+----------+--------------------------------+----------------------------+---------------+----------------+---------+

.. _planned-deprecation-1:

Planned Deprecation
'''''''''''''''''''

edX eventually would like to grant applications particular scopes as
authorized by users. This function can be thought of as an unofficial
implementation of the "Identity Scope" which a user allows an external
system access to identity details without providing any other
permissions, or scopes.

.. _other-lms-auth-1:

Other LMS Auth
~~~~~~~~~~~~~~~~~~~~~~

.. _lms-as-openid-idp-1:

LMS as OpenID idP
------------------

The LMS also acts as an OpenID idP. OpenID is different from OAuth2 in
several ways but one key difference is that anyone can use the idP - not
just explicitly added clients (like edX IDAs). But - we’re actively
attempting to deprecate and remove this functionality. A single legacy
course (CS50x) used to generate around 99% of the OpenID traffic - but
has since switched to using standard OAuth JWT auth.

.. _social-and-other-authentication-1:

Social (and Other) Authentication
----------------------------------

Open edX platform also supports several social authentication methods,
such as Google, Facebook, and LinkedIn - along with other
campus/business-specific authentication methods, such as CAS and
Shibboleth. These external authentication methods are used to integrate
or link your edX identity to another network identity. However, once the
identity link is established and an edX account is created, the LMS
still functions as usual as the idP for all satellite IDAs - the auth
method remains the same.

.. _server-to-server-auth-1:

Server-to-Server Auth
~~~~~~~~~~~~~~~~~~~~~~~

In one particular case, the ecommerce-worker application needs the
permissions to be able to enroll any user in any course **and** to
modify course pricing metadata by hitting both the "enrollment" and
"commerce" LMS APIs. This privileged permission is granted via an API
key header, where the API key is essentially a shared secret between the
LMS and the worker. The permission is granted outside the context of any
particular user.

In addition to the ecommerce-worker, the `notifier
IDA <https://github.com/edx/notifier>`__ and the `forums
IDA <https://github.com/edx/cs_comments_service>`__ also use the API key
header. The actual header name is: X-Edx-Api-Key

The preferred way of granting this type of permission is by using the
OAuth2 `client credentials
grant <https://tools.ietf.org/html/rfc6749#section-4.4>`__. The
ecommerce-worker would be granted the permissions of a user allowed to
enroll any other user in any course. edX plans to move to this type of
authentication for this server-to-server interaction in the near term.

.. _client-credentials-grant-1:

Client Credentials Grant
-------------------------

Suppose you had a Jenkins job that needed to perform server-to-server
authentication with the LMS and other platform services. Here's how the
client credentials grant would work:

|image0|

-  First, an application row would be created in the
   django-oauth-toolkit (DOT) tables.

   -  The row would contain:

      -  application: identifier of this particular "server"

      -  service_user: the LMS user that will be used to perform the
         server-based actions

      -  client_id: ID of this client application

      -  client_secret: secret key used to AuthN this client application

      -  grant_type: "client credentials"

      -  scopes: (future) scopes assigned to the service_user

-  A request is made from the Jenkins job to the LMS for an access
   token.

   -  The request would contain the client_id/client_secret.

   -  The request would specify that a token_type of JWT is returned.

-  If authed properly, the LMS replies with a JWT containing the
   access_token and scopes.

-  The Jenkins job calls a platform service endpoint.

   -  The endpoint is a DRF endpoint and uses JwtAuthentication.

   -  The request has an "Authorization" header of "JWT <access_token>".

   -  At present, the user is checked to verify that the request is
      being made by the service user.

   -  In future, scopes are checked to ensure that the operation is
      allowed.

.. _relevant-code-1:

Relevant Code
~~~~~~~~~~~~~~~~

.. _repositories-1:

Repositories
-------------

.. _django-oauth2-provider-dop-1:

django-oauth2-provider (DOP)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/edx/django-oauth2-provider
    * - Module Name
      - edx-django-oauth2-provider
    * - Python import name
      - provider
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - No

 DOP (pronounced “dope”) is the deprecated module used for base
OAuth2/OIDC authentication. edX forked the Python module due to
development inactivity and the need to add new functionality. To view
the changes in the fork:

https://github.com/caffeinehit/django-oauth2-provider/compare/master...edx:edx

.. _edx-oauth2-provider-1:

edx-oauth2-provider
^^^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/edx/edx-oauth2-provider
    * - Module Name
      - edx-oauth2-provider
    * - Python import name
      - edx_oauth2_provider
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - No

This edX-authored companion module to DOP can be thought of as a DOP
wrapper, providing specific edX-required functionality. This module and
DOP together implement OAuth2/OIDC but do not implement OAuth2/JWT.

Funny story: This module’s import name used to be oauth2_provider, which
directly conflicted with django-oauth2-toolkit’s (DOT’s) import name.
See
`here <https://openedx.atlassian.net/wiki/display/MA/Migrating+OAuth2+to+django-oauth-toolkit>`__
for more details - work was completed to change the import name to
edx_oauth2_provider.

.. _django-oauth2-toolkit-dot-1:

django-oauth2-toolkit (DOT)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/evonove/django-oauth-toolkit
    * - Module Name
      - django-oauth-toolkit
    * - Python import name
      - oauth2_provider
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - Yes

This module is the recommended modern implementation of OAuth2 and it
supports JWTs. The module does not support OpenID Connect access/ID
tokens. To continue using OpenID Connect, OIDC functionality would need
to be implemented for this module and we’ve currently decided not to add
this functionality.

.. _auth-backends-1:

auth-backends
^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/edx/auth-backends
    * - Module Name
      - edx-auth-backends
    * - Python import name
      - auth_backends
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - Yes

This module provides custom Django authentication backends for clients
to use when using the LMS as an idP.

.. _rest-framework-jwt-1:

rest-framework-jwt
^^^^^^^^^^^^^^^^^^
.. list-table::

    * - GitHub URL
      - https://github.com/GetBlimp/django-rest-framework-jwt
    * - Module Name
      - django-rest-framework-jwt
    * - Python import name
      - rest_framework_jwt
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - Yes

The module from which we use JSONWebTokenAuthentication, but extend it
with our own implementation.

.. _python-social-auth-1:

python-social-auth
^^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/omab/python-social-auth
    * - Module Name
      - python-social-auth
    * - Python import name
      - social
    * - Django 1.11 compatible?
      - Yes
    * - Python3 compatible?
      - Yes

This module provides support for integrating login with third-party
providers/services, such as Facebook, Twitter, Google, etc. The good
news: this module was updated to the latest split-module version in
`this pull request <https://github.com/edx/edx-platform/pull/15135>`__.

.. _django-oauth-plus-1:

django-oauth-plus
^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://bitbucket.org/david/django-oauth-plus
    * - Module Name
      - django-oauth-plus
    * - Python import name
      - oauth_provider
    * - Django 1.11 compatible?
      - No - latest tagged is 1.9 compatible & master is 1.10 compatible
    * - Python3 compatible?
      - No

This module is a requirement of django-rest-framework-oauth but is
otherwise unused in the edx-platform codebase. However, it's
unfortunately in the INSTALLED_APPS of the LMS because of a model
foreign key dependency with drf-oauth.

.. _django-openid-auth-1:

django-openid-auth
^^^^^^^^^^^^^^^^^^

.. list-table::

    * - GitHub URL
      - https://github.com/edx/django-openid-auth
    * - Module Namee
      - django-openid-auth
    * - Python import name
      - django_openid_auth
    * - Django 1.11 compatible?
      - Yes - converted during last edx-platform Django upgrade.
    * - Python3 compatible?
      - edX fork is not - upstream is.

This module provides support for Open edX as an OpenID idP. The plan is
to deprecate/remove this functionality, as detailed above.

.. _edx-platform-code-1:

Edx-platform Code
------------------

.. _openedx.core.djangoapps.oauth_dispatch-1:

openedx.core.djangoapps.oauth_dispatch
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Code which handles the routing between DOP/DOT (or OAuth2/OIDC &
OAuth2/JWT) based on the access token. How does it accomplish this? The
client ID is sent along with an OAuth2 request. The code looks in both
the DOT and DOP client tables to see where the client exists - and
routes the request to use that module backend. The code:
https://github.com/edx/edx-platform/blob/release-2017-08-21-12.06/openedx/core/djangoapps/oauth_dispatch/views.py#L38-L45

Also sends back the correct token - either Bearer or JWT - also based on
the access token. Implements the "restricted client" functionality which
returns an expired JWT for the purpose of identity details only - see
RestrictedApplication.

.. _openedx.core.djangoapps.external_auth-1:

openedx.core.djangoapps.external_auth
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Code supporting the LMS’s role as an OpenID provider, as well as login
methods for CAS, Shibboleth, OpenID, and MIT SSL.

.. _common.djangoapps.third_party_auth-1:

common.djangoapps.third_party_auth
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Code handling LTI/SAML authentication as well as python-social-auth
login, such as Google, Facebook, etc.

.. _desired-future-auth-situation-1:

Desired Future Auth Situation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An “Update Authentication” epic has been created to address the desired
changes:

https://openedx.atlassian.net/browse/LEARNER-701

 It contains several stories, including the story below, which details
the change in authentication methods for all IDAs to use OAuth2/JWT:

https://openedx.atlassian.net/browse/LEARNER-724

In doing this work, all the OAuth2 authorized clients can be found by
viewing the oauth clients table in the database. They'll all need to be
migrated from DOP tables to DOT tables.

At the end of the work above, edx-platform will only use a single module
for its idP functionality - django-oauth2-toolkit, or DOT.

Other consolidation steps to take:

-  Deprecate Open edX as on OpenID identity provider.

   -  The OpenID idP clients would be shifted to using the restricted
      client application functionality.

   -  Then the OpenID functionality would be removed.



-  Deprecate/remove the api key header server-to-server functionality.

   -  Shift the users to use OAuth2's client credentials grant instead.

.. _scopes-1:

Scopes
------

In the far-term, edX would like to start using OAuth2 scopes for more
fine-grained authorization. The scopes would be well-defined for the
Open edX platform, mapping scopes to particular read/write operations on
particular data. Some examples of using OAuth2 scopes:

https://api.slack.com/docs/oauth-scopes

https://developers.google.com/identity/protocols/googlescopes

.. _more-information-1:

More Information
~~~~~~~~~~~~~~~~

`OAuth
2.0 <file:////wiki/spaces/ArchiveEng/pages/80249207/OAuth+2.0>`__ - an
Open edX page with details on how to obtain a Bearer token **or** JWT.

https://nordicapis.com/api-security-oauth-openid-connect-depth/ - A page
discussing the differences/relationship between OAuth2 and OpenID
Connect.

.. _some-relevant-tickets-1:

Some Relevant Tickets
----------------------
LEARNER-701

`PLAT-1660 <https://openedx.atlassian.net/browse/PLAT-1660>`__

.. |image0| image:: media/image1.jpeg
