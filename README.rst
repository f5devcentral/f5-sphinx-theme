F5 Sphinx Theme
===============

.. image:: https://github.com/f5devcentral/f5-sphinx-theme/actions/workflows/test.yml/badge.svg

The f5-sphinx-theme provides F5 Networks styling and layouts for projects built with `Sphinx <http://www.sphinx-doc.org/en/stable/index.html>`_. This theme should not be used without modification for any project that doesn't publish documentation to `clouddocs.f5.com <http://clouddocs.f5.com>`_.


Setup and Configuration
-----------------------
1. ``pip install f5-sphinx-theme``
2. Update your project's ``conf.py`` with the following settings: ::

    import f5_sphinx_theme
    html_theme = 'f5_sphinx_theme'
    html_sidebars = {'**': ['searchbox.html', 'localtoc.html', 'globaltoc.html']}

3. (Optional) Set the ``html_theme_options{}`` dictionary. Supported options are shown below. ::

    html_theme_options = {
                            'site_name': '<desired site name>',           \\ DEFAULTS TO "CloudDocs home"
                            'next_prev_link': True or False,              \\ DEFAULTS TO FALSE
                            'html_last_updated_fmt': '%Y-%m-%d %H:%M:%S', \\ REQUIRED FOR FEDERATED SEARCH, DO NOT CHANGE
                            # 'surveymonkey_url' = '',                    \\ DEFAULTS TO ''
                            # 'medallia_embed_url' = '',                  \\ DEFAULTS TO ''
                            # 'medallia_id' = '',                         \\ DEFAULTS TO "medallia_inline_survey"
                            # 'feedback_exclude_pages': ['page.html'],    \\ DEFAULTS TO ['index.html', 'search.html'], THE TABLE OF CONTENTS AND SEARCH PAGE
                            # 'base_url' = ''                             \\ DEFAULTS TO '/',
                            # 'sidebar_toc_maxdepth' = ''                 \\ DEFAULTS TO '', Override 'maxdepth' behavior on sidebar toc in layout.html. This is an integer value.
                            # 'hide_right_menu': True or False,           \\ DEFAULTS TO FALSE
                            # 'next_prev_link_skip_index': True or False, \\ DEFAULTS TO FALSE. Hide Next and Previous buttons from all 'index' pages?
                            # 'show_project': True,                       \\ DEFAULTS TO TRUE. Show project and version in left menu
                            # 'dropdown': {                               \\ DEFAULTS TO ''. Enable dropdown menu
                            #   'name': 'SPK v1.9.1',
                            #   'links': {
                            #     'SPK v1.9.0': '/service-proxy/1.9.0/intro.html',
                            #     'SPK v1.8.2': '/service-proxy/1.8.2/intro.html'
                            #   }
    }
                         }

   \

   The ``base_url`` theme option is intended to allow customization of the root URL.


.. note::

   Depending on your publication/deployment process, you may have to re-build your documentation for the changes to take effect.


Version Selector
----------------

You can add a version selector to the navbar, as shown below:

.. image:: /screenshots/version.png

The version selector is **not enabled** by default.
To enable it, add the following settings to your docs/conf.py:

.. code-block:: python

   html_theme_options = {
     'version_selector': True,
   }

   html_context = {
     'version_meta_path': 'uri/of/your/json/versions/file.json',
     'project_safe': re.sub('[^A-Za-z0-9]+', '', project)
   }


The ``'version_meta_path'`` refers to the location of a version.json file in the host S3 bucket.
The versions displayed in the version selector are generated from this JSON file via an AJAX call. You only need to update one file to make the change across all versions.
Generating the JSON is left up to the implementor (i.e., you), but it can be incorporated into a CI/CD process.
Ideally, the JSON should be at the root of the project directory in S3, with versions being in subfolders as shown here:

.. code-block:: text

   project_root
     |
     +---versions.json
     |
     +---v2.0.0
     |   \--- <docs_html>
     |
     +---v1.0.1
     |   \--- <docs_html>
     |
     +---v1.0.0
         \--- <docs_html>

See the [test](/test) directory in this repo for a basic example.

Usage
-----

See the `project wiki <https://github.com/f5devcentral/f5-sphinx-theme/wiki>`_ for more information.

Testing
-------

This project uses GitHub Actions for CI/CD.

Copyright
---------

Copyright 2017-18 F5 Networks Inc.

License
-------

Apache V2.0
```````````

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

