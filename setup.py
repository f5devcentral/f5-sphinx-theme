# Copyright 2017-2018 F5 Networks
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import sys
from setuptools import find_packages, setup
from f5_sphinx_theme import __version__

import f5_sphinx_theme

with open('README.rst') as f:
    long_desc = f.read()

setup(
    name='f5_sphinx_theme',
    version=__version__,
    url='https://github.com/F5DevCentral/f5-sphinx-theme',
    license='Apache2',
    author='F5 Networks',
    author_email='f5-sphinx-theme@f5.com',
    description='Sphinx theme for F5 Networks',
    long_description= long_desc,
    zip_safe=False,
    packages=['f5_sphinx_theme'],
    package_data={'f5_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/fonts/*.*'
    ]},
    entry_points = {
        'sphinx.html_themes': [
            'f5_sphinx_theme = f5_sphinx_theme'
        ]
    },
    include_package_data=True,
    python_requires='>=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*',
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: Apache Software License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
