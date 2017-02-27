# Copyright 2017 F5 Networks
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

from setuptools import setup
from f5_sphinx_theme import __version__


setup(
    name='f5_sphinx_theme',
    version=__version__,
    url='https://github.com/F5DevCentral/f5-sphinx-theme',
    license='Apache2',
    author='F5 Networks',
    author_email='shawn@f5.com',
    description='Sphinx theme for F5 documentation',
    long_description=open('README.rst').read(),
    zip_safe=False,
    packages=['f5_sphinx_theme'],
    package_data={'f5_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/fonts/*.*'
    ]},
    include_package_data=True,
    classifiers=[
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: BSD License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
