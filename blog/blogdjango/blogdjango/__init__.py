import pymysql
# from django.core import signals
# from django.db import close_old_connections

pymysql.install_as_MySQLdb()

# 取消信号关联，实现数据库长连接
# signals.request_finished.disconnect(close_old_connections)