Swazoo_FILES = \
packages/swazoo-httpd/Exceptions.st packages/swazoo-httpd/Headers.st packages/swazoo-httpd/Messages.st packages/swazoo-httpd/Core.st packages/swazoo-httpd/Resources.st packages/swazoo-httpd/HTTP.st packages/swazoo-httpd/Tests.st 
$(Swazoo_FILES):
$(srcdir)/packages/swazoo-httpd/stamp-classes: $(Swazoo_FILES)
	touch $(srcdir)/packages/swazoo-httpd/stamp-classes
