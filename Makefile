# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = F5 Theme Test Docs
DEVDIR        = test
SOURCEDIR     = $(DEVDIR)/docs
BUILDDIR      = $(DEVDIR)/docs/_build

# Put it first so that "make" without argument is like "make help".
.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

# Commands for building and testing project documentation
# build live preview of docs locally
.PHONY: preview
preview:
	@echo "Running autobuild. View live edits at:"
	@echo "  http://0.0.0.0:8000"
	@echo ""
	sphinx-autobuild --host 0.0.0.0 -b html $(SOURCEDIR) $(BUILDDIR)/html

# run _docs quality tests locally
.PHONY: test
test:
	rm -rf docs/_build
	./test/test-docs.sh

.PHONY: html
html:
	rm -vrf $(BUILDDIR)/html/* $(BUILDDIR)/doctrees/*
	$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
	cp -v $(DEVDIR)/versions.json $(BUILDDIR)/html/

# one-time html build using a docker container
.PHONY: docker-html
docker-html:
	./test/docker-docs.sh make html
