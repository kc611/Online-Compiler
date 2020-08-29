
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name = 'index.html'))
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)



# # ... the rest of your URLconf goes here ...

# if settings.DEBUG:
#     urlpatterns += [
#         re_path(r'^media/(?P<path>.*)$', serve, {
#             'document_root': settings.STATIC_URL,
#         }),
#     ]