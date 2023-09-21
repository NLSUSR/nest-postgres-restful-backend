Команда:     ABORT
Описание:    прервать текущую транзакцию
Синтаксис:
ABORT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

URL: https://www.postgresql.org/docs/15/sql-abort.html

Команда:     ALTER AGGREGATE
Описание:    изменить определение агрегатной функции
Синтаксис:
ALTER AGGREGATE имя ( сигнатура_агр_функции ) RENAME TO новое_имя
ALTER AGGREGATE имя ( сигнатура_агр_функции )
                OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER AGGREGATE имя ( сигнатура_агр_функции ) SET SCHEMA новая_схема

где сигнатура_агр_функции:

* |
[ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] |
[ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] ] ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ]

URL: https://www.postgresql.org/docs/15/sql-alteraggregate.html

Команда:     ALTER COLLATION
Описание:    изменить определение правила сортировки
Синтаксис:
ALTER COLLATION имя REFRESH VERSION

ALTER COLLATION имя RENAME TO новое_имя
ALTER COLLATION имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER COLLATION имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altercollation.html

Команда:     ALTER CONVERSION
Описание:    изменить определение преобразования
Синтаксис:
ALTER CONVERSION имя RENAME TO новое_имя
ALTER CONVERSION имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER CONVERSION имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-alterconversion.html

Команда:     ALTER DATABASE
Описание:    изменить атрибуты базы данных
Синтаксис:
ALTER DATABASE имя [ [ WITH ] параметр [ ... ] ]

где допустимые параметры:

    ALLOW_CONNECTIONS разр_подключения
    CONNECTION LIMIT предел_подключений
    IS_TEMPLATE это_шаблон

ALTER DATABASE имя RENAME TO новое_имя

ALTER DATABASE имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

ALTER DATABASE имя SET TABLESPACE новое_табл_пространство

ALTER DATABASE имя REFRESH COLLATION VERSION

ALTER DATABASE имя SET параметр_конфигурации { TO | = } { значение | DEFAULT }
ALTER DATABASE имя SET параметр_конфигурации FROM CURRENT
ALTER DATABASE имя RESET параметр_конфигурации
ALTER DATABASE имя RESET ALL

URL: https://www.postgresql.org/docs/15/sql-alterdatabase.html

Команда:     ALTER DEFAULT PRIVILEGES
Описание:    определить права доступа по умолчанию
Синтаксис:
ALTER DEFAULT PRIVILEGES
    [ FOR { ROLE | USER } целевая_роль [, ...] ]
    [ IN SCHEMA имя_схемы [, ...] ]
    предложение_GRANT_или_REVOKE

где допустимое предложение_GRANT_или_REVOKE:

GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON TABLES
    TO { [ GROUP ] имя_роли | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON SEQUENCES
    TO { [ GROUP ] имя_роли | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { EXECUTE | ALL [ PRIVILEGES ] }
    ON { FUNCTIONS | ROUTINES }
    TO { [ GROUP ] имя_роли | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON TYPES
    TO { [ GROUP ] имя_роли | PUBLIC } [, ...] [ WITH GRANT OPTION ]

GRANT { USAGE | CREATE | ALL [ PRIVILEGES ] }
    ON SCHEMAS
    TO { [ GROUP ] имя_роли | PUBLIC } [, ...] [ WITH GRANT OPTION ]

REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON TABLES
    FROM { [ GROUP ] имя_роли | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON SEQUENCES
    FROM { [ GROUP ] имя_роли | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { EXECUTE | ALL [ PRIVILEGES ] }
    ON { FUNCTIONS | ROUTINES }
    FROM { [ GROUP ] имя_роли | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON TYPES
    FROM { [ GROUP ] имя_роли | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | CREATE | ALL [ PRIVILEGES ] }
    ON SCHEMAS
    FROM { [ GROUP ] имя_роли | PUBLIC } [, ...]
    [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-alterdefaultprivileges.html

Команда:     ALTER DOMAIN
Описание:    изменить определение домена
Синтаксис:
ALTER DOMAIN имя
    { SET DEFAULT выражение | DROP DEFAULT }
ALTER DOMAIN имя
    { SET | DROP } NOT NULL
ALTER DOMAIN имя
    ADD ограничение_домена [ NOT VALID ]
ALTER DOMAIN имя
    DROP CONSTRAINT [ IF EXISTS ] имя_ограничения [ RESTRICT | CASCADE ]
ALTER DOMAIN имя
     RENAME CONSTRAINT имя_ограничения TO имя_нового_ограничения
ALTER DOMAIN имя
    VALIDATE CONSTRAINT имя_ограничения
ALTER DOMAIN имя
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER DOMAIN имя
    RENAME TO новое_имя
ALTER DOMAIN имя
    SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-alterdomain.html

Команда:     ALTER EVENT TRIGGER
Описание:    изменить определение событийного триггера
Синтаксис:
ALTER EVENT TRIGGER имя DISABLE
ALTER EVENT TRIGGER имя ENABLE [ REPLICA | ALWAYS ]
ALTER EVENT TRIGGER имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER EVENT TRIGGER имя RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-altereventtrigger.html

Команда:     ALTER EXTENSION
Описание:    изменить определение расширения
Синтаксис:
ALTER EXTENSION имя UPDATE [ TO новая_версия ]
ALTER EXTENSION имя SET SCHEMA новая_схема
ALTER EXTENSION имя ADD элемент_объект
ALTER EXTENSION имя DROP элемент_объект

где элемент_объект:

  ACCESS METHOD имя_объекта |
  AGGREGATE имя_агр_функции ( сигнатура_агр_функции ) |
  CAST (исходный_тип AS целевой_тип) |
  COLLATION имя_объекта |
  CONVERSION имя_объекта |
  DOMAIN имя_объекта |
  EVENT TRIGGER имя_объекта |
  FOREIGN DATA WRAPPER имя_объекта |
  FOREIGN TABLE имя_объекта |
  FUNCTION имя_функции [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  MATERIALIZED VIEW имя_объекта |
  OPERATOR имя_оператора (тип_слева, тип_справа) |
  OPERATOR CLASS имя_объекта USING метод_индекса |
  OPERATOR FAMILY имя_объекта USING метод_индекса |
  [ PROCEDURAL ] LANGUAGE имя_объекта |
  PROCEDURE имя_процедуры [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  ROUTINE имя_подпрограммы [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  SCHEMA имя_объекта |
  SEQUENCE имя_объекта |
  SERVER имя_объекта |
  TABLE имя_объекта |
  TEXT SEARCH CONFIGURATION имя_объекта |
  TEXT SEARCH DICTIONARY имя_объекта |
  TEXT SEARCH PARSER имя_объекта |
  TEXT SEARCH TEMPLATE имя_объекта |
  TRANSFORM FOR имя_типа LANGUAGE имя_языка |
  TYPE имя_объекта |
  VIEW имя_объекта

и сигнатура_агр_функции:

* |
[ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] |
[ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] ] ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ]

URL: https://www.postgresql.org/docs/15/sql-alterextension.html

Команда:     ALTER FOREIGN DATA WRAPPER
Описание:    изменить определение обёртки сторонних данных
Синтаксис:
ALTER FOREIGN DATA WRAPPER имя
    [ HANDLER функция_обработчик | NO HANDLER ]
    [ VALIDATOR функция_проверки | NO VALIDATOR ]
    [ OPTIONS ( [ ADD | SET | DROP ] параметр ['значение'] [, ... ]) ]
ALTER FOREIGN DATA WRAPPER имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER FOREIGN DATA WRAPPER имя RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-alterforeigndatawrapper.html

Команда:     ALTER FOREIGN TABLE
Описание:    изменить определение сторонней таблицы
Синтаксис:
ALTER FOREIGN TABLE [ IF EXISTS ] [ ONLY ] имя [ * ]
    действие [, ... ]
ALTER FOREIGN TABLE [ IF EXISTS ] [ ONLY ] имя [ * ]
    RENAME [ COLUMN ] имя_столбца TO новое_имя_столбца
ALTER FOREIGN TABLE [ IF EXISTS ] имя
    RENAME TO новое_имя
ALTER FOREIGN TABLE [ IF EXISTS ] имя
    SET SCHEMA новая_схема

где допустимое действие:

    ADD [ COLUMN ] имя_столбца тип_данных [ COLLATE правило_сортировки ] [ ограничение_столбца [ ... ] ]
    DROP [ COLUMN ] [ IF EXISTS ] имя_столбца [ RESTRICT | CASCADE ]
    ALTER [ COLUMN ] имя_столбца [ SET DATA ] TYPE тип_данных [ COLLATE правило_сортировки ]
    ALTER [ COLUMN ] имя_столбца SET DEFAULT выражение
    ALTER [ COLUMN ] имя_столбца DROP DEFAULT
    ALTER [ COLUMN ] имя_столбца { SET | DROP } NOT NULL
    ALTER [ COLUMN ] имя_столбца SET STATISTICS целое
    ALTER [ COLUMN ] имя_столбца SET ( атрибут = значение [, ... ] )
    ALTER [ COLUMN ] имя_столбца RESET ( атрибут [, ... ] )
    ALTER [ COLUMN ] имя_столбца SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
    ALTER [ COLUMN ] имя_столбца OPTIONS ( [ ADD | SET | DROP ] параметр ['значение'] [, ... ])
    ADD ограничение_таблицы [ NOT VALID ]
    VALIDATE CONSTRAINT имя_ограничения
    DROP CONSTRAINT [ IF EXISTS ]  имя_ограничения [ RESTRICT | CASCADE ]
    DISABLE TRIGGER [ имя_триггера | ALL | USER ]
    ENABLE TRIGGER [ имя_триггера | ALL | USER ]
    ENABLE REPLICA TRIGGER имя_триггера
    ENABLE ALWAYS TRIGGER имя_триггера
    SET WITHOUT OIDS
    INHERIT таблица_родитель
    NO INHERIT таблица_родитель
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    OPTIONS ( [ ADD | SET | DROP ] параметр ['значение'] [, ... ])

URL: https://www.postgresql.org/docs/15/sql-alterforeigntable.html

Команда:     ALTER FUNCTION
Описание:    изменить определение функции
Синтаксис:
ALTER FUNCTION имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    действие [ ... ] [ RESTRICT ]
ALTER FUNCTION имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    RENAME TO новое_имя
ALTER FUNCTION имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER FUNCTION имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    SET SCHEMA новая_схема
ALTER FUNCTION имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    [ NO ] DEPENDS ON EXTENSION имя_расширения

где допустимое действие:

    CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT
    IMMUTABLE | STABLE | VOLATILE
    [ NOT ] LEAKPROOF
    [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    PARALLEL { UNSAFE | RESTRICTED | SAFE }
    COST стоимость_выполнения
    ROWS строк_в_результате
    SUPPORT вспомогательная_функция
    SET параметр_конфигурации { TO | = } { значение | DEFAULT }
    SET параметр_конфигурации FROM CURRENT
    RESET параметр_конфигурации
    RESET ALL

URL: https://www.postgresql.org/docs/15/sql-alterfunction.html

Команда:     ALTER GROUP
Описание:    изменить имя роли или членство
Синтаксис:
ALTER GROUP указание_роли ADD USER имя_пользователя [, ... ]
ALTER GROUP указание_роли DROP USER имя_пользователя [, ... ]

где допустимое указание_роли:

    имя_роли
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

ALTER GROUP имя_группы RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-altergroup.html

Команда:     ALTER INDEX
Описание:    изменить определение индекса
Синтаксис:
ALTER INDEX [ IF EXISTS ] имя RENAME TO новое_имя
ALTER INDEX [ IF EXISTS ] имя SET TABLESPACE табл_пространство
ALTER INDEX имя ATTACH PARTITION имя_индекса
ALTER INDEX имя [ NO ] DEPENDS ON EXTENSION имя_расширения
ALTER INDEX [ IF EXISTS ] имя SET ( параметр_хранения [= значение] [, ... ] )
ALTER INDEX [ IF EXISTS ] имя RESET ( параметр_хранения [, ... ] )
ALTER INDEX [ IF EXISTS ] имя ALTER [ COLUMN ] номер_столбца
    SET STATISTICS целое
ALTER INDEX ALL IN TABLESPACE имя [ OWNED BY имя_роли [, ... ] ]
    SET TABLESPACE новое_табл_пространство [ NOWAIT ]

URL: https://www.postgresql.org/docs/15/sql-alterindex.html

Команда:     ALTER LANGUAGE
Описание:    изменить определение процедурного языка
Синтаксис:
ALTER [ PROCEDURAL ] LANGUAGE имя RENAME TO новое_имя
ALTER [ PROCEDURAL ] LANGUAGE имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

URL: https://www.postgresql.org/docs/15/sql-alterlanguage.html

Команда:     ALTER LARGE OBJECT
Описание:    изменить определение большого объекта
Синтаксис:
ALTER LARGE OBJECT oid_большого_объекта OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

URL: https://www.postgresql.org/docs/15/sql-alterlargeobject.html

Команда:     ALTER MATERIALIZED VIEW
Описание:    изменить определение материализованного представления
Синтаксис:
ALTER MATERIALIZED VIEW [ IF EXISTS ] имя
    действие [, ... ]
ALTER MATERIALIZED VIEW имя
    [ NO ] DEPENDS ON EXTENSION имя_расширения
ALTER MATERIALIZED VIEW [ IF EXISTS ] имя
    RENAME [ COLUMN ] имя_столбца TO новое_имя_столбца
ALTER MATERIALIZED VIEW [ IF EXISTS ] имя
    RENAME TO новое_имя
ALTER MATERIALIZED VIEW [ IF EXISTS ] имя
    SET SCHEMA новая_схема
ALTER MATERIALIZED VIEW ALL IN TABLESPACE имя [ OWNED BY имя_роли [, ... ] ]
    SET TABLESPACE новое_табл_пространство [ NOWAIT ]

где допустимое действие:

    ALTER [ COLUMN ] имя_столбца SET STATISTICS целое
    ALTER [ COLUMN ] имя_столбца SET ( атрибут = значение [, ... ] )
    ALTER [ COLUMN ] имя_столбца RESET ( атрибут [, ... ] )
    ALTER [ COLUMN ] имя_столбца SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
    ALTER [ COLUMN ] имя_столбца SET COMPRESSION метод_сжатия
    CLUSTER ON имя_индекса
    SET WITHOUT CLUSTER
    SET ACCESS METHOD новый_метод_доступа
    SET TABLESPACE новое_табл_пространство
    SET ( параметр_хранения [= значение] [, ... ] )
    RESET ( параметр_хранения [, ... ] )
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

URL: https://www.postgresql.org/docs/15/sql-altermaterializedview.html

Команда:     ALTER OPERATOR
Описание:    изменить определение оператора
Синтаксис:
ALTER OPERATOR имя ( { тип_слева | NONE } , тип_справа )
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

ALTER OPERATOR имя ( { тип_слева | NONE } , тип_справа )
    SET SCHEMA новая_схема

ALTER OPERATOR имя ( { тип_слева | NONE } , тип_справа )
    SET ( {  RESTRICT = { процедура_ограничения | NONE }
           | JOIN = { процедура_соединения | NONE }
         } [, ... ] )

URL: https://www.postgresql.org/docs/15/sql-alteroperator.html

Команда:     ALTER OPERATOR CLASS
Описание:    изменить определение класса операторов
Синтаксис:
ALTER OPERATOR CLASS имя USING метод_индекса
    RENAME TO новое_имя

ALTER OPERATOR CLASS имя USING метод_индекса
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

ALTER OPERATOR CLASS имя USING метод_индекса
    SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-alteropclass.html

Команда:     ALTER OPERATOR FAMILY
Описание:    изменить определение семейства операторов
Синтаксис:
ALTER OPERATOR FAMILY имя USING метод_индекса ADD
  {  OPERATOR номер_стратегии имя_оператора ( тип_операции, тип_операции )
              [ FOR SEARCH | FOR ORDER BY семейство_сортировки ]
   | FUNCTION номер_опорной_процедуры [ ( тип_операции [ , тип_операции ] ) ]
              имя_функции [ ( тип_аргумента [, ...] ) ]
  } [, ... ]

ALTER OPERATOR FAMILY имя USING метод_индекса DROP
  {  OPERATOR номер_стратегии ( тип_операции [ , тип_операции ] )
   | FUNCTION номер_опорной_процедуры ( тип_операции [ , тип_операции ] )
  } [, ... ]

ALTER OPERATOR FAMILY имя USING метод_индекса
    RENAME TO новое_имя

ALTER OPERATOR FAMILY имя USING метод_индекса
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

ALTER OPERATOR FAMILY имя USING метод_индекса
    SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-alteropfamily.html

Команда:     ALTER POLICY
Описание:    изменить определение политики защиты на уровне строк
Синтаксис:
ALTER POLICY имя ON имя_таблицы RENAME TO новое_имя

ALTER POLICY имя ON имя_таблицы
    [ TO { имя_роли | PUBLIC | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...] ]
    [ USING ( выражение_использования ) ]
    [ WITH CHECK ( выражение_проверки ) ]

URL: https://www.postgresql.org/docs/15/sql-alterpolicy.html

Команда:     ALTER PROCEDURE
Описание:    изменить определение процедуры
Синтаксис:
ALTER PROCEDURE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    действие [ ... ] [ RESTRICT ]
ALTER PROCEDURE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    RENAME TO новое_имя
ALTER PROCEDURE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER PROCEDURE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    SET SCHEMA новая_схема
ALTER PROCEDURE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    [ NO ] DEPENDS ON EXTENSION имя_расширения

где допустимое действие:

    [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    SET параметр_конфигурации { TO | = } { значение | DEFAULT }
    SET параметр_конфигурации FROM CURRENT
    RESET параметр_конфигурации
    RESET ALL

URL: https://www.postgresql.org/docs/15/sql-alterprocedure.html

Команда:     ALTER PUBLICATION
Описание:    изменить определение публикации
Синтаксис:
ALTER PUBLICATION имя ADD объект_публикации [, ...]
ALTER PUBLICATION имя SET объект_публикации [, ...]
ALTER PUBLICATION имя DROP объект_публикации [, ...]
ALTER PUBLICATION имя SET ( параметр_публикации [= значение] [, ... ] )
ALTER PUBLICATION имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER PUBLICATION имя RENAME TO новое_имя

где объект_публикации:

    TABLE [ ONLY ] имя_таблицы [ * ] [ ( имя_столбца [, ... ] ) ] [ WHERE ( выражение ) ] [, ... ]
    TABLES IN SCHEMA { имя_схемы | CURRENT_SCHEMA } [, ... ]

URL: https://www.postgresql.org/docs/15/sql-alterpublication.html

Команда:     ALTER ROLE
Описание:    изменить роль пользователя БД
Синтаксис:
ALTER ROLE указание_роли [ WITH ] параметр [ ... ]

где допустимые параметры:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT предел_подключений
    | [ ENCRYPTED ] PASSWORD 'пароль' | PASSWORD NULL
    | VALID UNTIL 'timestamp'

ALTER ROLE имя RENAME TO новое_имя

ALTER ROLE { указание_роли | ALL } [ IN DATABASE имя_БД ] SET параметр_конфигурации { TO | = } { значение | DEFAULT }
ALTER ROLE { указание_роли | ALL } [ IN DATABASE имя_БД ] SET параметр_конфигурации FROM CURRENT
ALTER ROLE { указание_роли | ALL } [ IN DATABASE имя_БД ] RESET параметр_конфигурации
ALTER ROLE { указание_роли | ALL } [ IN DATABASE имя_БД ] RESET ALL

где допустимое указание_роли:

    имя_роли
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

URL: https://www.postgresql.org/docs/15/sql-alterrole.html

Команда:     ALTER ROUTINE
Описание:    изменить определение подпрограммы
Синтаксис:
ALTER ROUTINE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    действие [ ... ] [ RESTRICT ]
ALTER ROUTINE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    RENAME TO новое_имя
ALTER ROUTINE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER ROUTINE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    SET SCHEMA новая_схема
ALTER ROUTINE имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ]
    [ NO ] DEPENDS ON EXTENSION имя_расширения

где допустимое действие:

    IMMUTABLE | STABLE | VOLATILE
    [ NOT ] LEAKPROOF
    [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    PARALLEL { UNSAFE | RESTRICTED | SAFE }
    COST стоимость_выполнения
    ROWS строк_в_результате
    SET параметр_конфигурации { TO | = } { значение | DEFAULT }
    SET параметр_конфигурации FROM CURRENT
    RESET параметр_конфигурации
    RESET ALL

URL: https://www.postgresql.org/docs/15/sql-alterroutine.html

Команда:     ALTER RULE
Описание:    изменить определение правила
Синтаксис:
ALTER RULE имя ON имя_таблицы RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-alterrule.html

Команда:     ALTER SCHEMA
Описание:    изменить определение схемы
Синтаксис:
ALTER SCHEMA имя RENAME TO новое_имя
ALTER SCHEMA имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

URL: https://www.postgresql.org/docs/15/sql-alterschema.html

Команда:     ALTER SEQUENCE
Описание:    изменить определение генератора последовательности
Синтаксис:
ALTER SEQUENCE [ IF EXISTS ] имя
    [ AS тип_данных ]
    [ INCREMENT [ BY ] шаг ]
    [ MINVALUE мин_значение | NO MINVALUE ] [ MAXVALUE макс_значение | NO MAXVALUE ]
    [ START [ WITH ] начальное_значение ]
    [ RESTART [ [ WITH ] значение_перезапуска ] ]
    [ CACHE кеш ] [ [ NO ] CYCLE ]
    [ OWNED BY { имя_таблицы.имя_столбца | NONE } ]
ALTER SEQUENCE [ IF EXISTS ] имя SET { LOGGED | UNLOGGED }
ALTER SEQUENCE [ IF EXISTS ] имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER SEQUENCE [ IF EXISTS ] имя RENAME TO новое_имя
ALTER SEQUENCE [ IF EXISTS ] имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altersequence.html

Команда:     ALTER SERVER
Описание:    изменить определение стороннего сервера
Синтаксис:
ALTER SERVER имя [ VERSION 'новая_версия' ]
    [ OPTIONS ( [ ADD | SET | DROP ] параметр ['значение'] [, ... ] ) ]
ALTER SERVER имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER SERVER имя RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-alterserver.html

Команда:     ALTER STATISTICS
Описание:    изменить определение объекта расширенной статистики
Синтаксис:
ALTER STATISTICS имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER STATISTICS имя RENAME TO новое_имя
ALTER STATISTICS имя SET SCHEMA новая_схема
ALTER STATISTICS имя SET STATISTICS новое_имя

URL: https://www.postgresql.org/docs/15/sql-alterstatistics.html

Команда:     ALTER SUBSCRIPTION
Описание:    изменить определение подписки
Синтаксис:
ALTER SUBSCRIPTION имя CONNECTION 'строка_подключения'
ALTER SUBSCRIPTION имя SET PUBLICATION имя_публикации [, ...] [ WITH ( параметр_публикации [= значение] [, ... ] ) ]
ALTER SUBSCRIPTION имя ADD PUBLICATION имя_публикации [, ...] [ WITH ( параметр_публикации [= значение] [, ... ] ) ]
ALTER SUBSCRIPTION имя DROP PUBLICATION имя_публикации [, ...] [ WITH ( параметр_публикации [= значение] [, ... ] ) ]
ALTER SUBSCRIPTION имя REFRESH PUBLICATION [ WITH ( параметр_обновления [= значение] [, ... ] ) ]
ALTER SUBSCRIPTION имя ENABLE
ALTER SUBSCRIPTION имя DISABLE
ALTER SUBSCRIPTION имя SET ( параметр_подписки [= значение] [, ... ] )
ALTER SUBSCRIPTION имя SKIP ( параметр_пропуска = значение )
ALTER SUBSCRIPTION имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER SUBSCRIPTION имя RENAME TO новое_имя

URL: https://www.postgresql.org/docs/15/sql-altersubscription.html

Команда:     ALTER SYSTEM
Описание:    изменить параметр конфигурации сервера
Синтаксис:
ALTER SYSTEM SET параметр_конфигурации { TO | = } { значение | 'значение' | DEFAULT }

ALTER SYSTEM RESET параметр_конфигурации
ALTER SYSTEM RESET ALL

URL: https://www.postgresql.org/docs/15/sql-altersystem.html

Команда:     ALTER TABLE
Описание:    изменить определение таблицы
Синтаксис:
ALTER TABLE [ IF EXISTS ] [ ONLY ] имя [ * ]
    действие [, ... ]
ALTER TABLE [ IF EXISTS ] [ ONLY ] имя [ * ]
    RENAME [ COLUMN ] имя_столбца TO новое_имя_столбца
ALTER TABLE [ IF EXISTS ] [ ONLY ] имя [ * ]
    RENAME CONSTRAINT имя_ограничения TO имя_нового_ограничения
ALTER TABLE [ IF EXISTS ] имя
    RENAME TO новое_имя
ALTER TABLE [ IF EXISTS ] имя
    SET SCHEMA новая_схема
ALTER TABLE ALL IN TABLESPACE имя [ OWNED BY имя_роли [, ... ] ]
    SET TABLESPACE новое_табл_пространство [ NOWAIT ]
ALTER TABLE [ IF EXISTS ] имя
    ATTACH PARTITION имя_секции { FOR VALUES указание_границ_секции | DEFAULT }
ALTER TABLE [ IF EXISTS ] имя
    DETACH PARTITION имя_секции [ CONCURRENTLY | FINALIZE ]

где допустимое действие:

    ADD [ COLUMN ] [ IF NOT EXISTS ] имя_столбца тип_данных [ COLLATE правило_сортировки ] [ ограничение_столбца [ ... ] ]
    DROP [ COLUMN ] [ IF EXISTS ] имя_столбца [ RESTRICT | CASCADE ]
    ALTER [ COLUMN ] имя_столбца [ SET DATA ] TYPE тип_данных [ COLLATE правило_сортировки ] [ USING выражение ]
    ALTER [ COLUMN ] имя_столбца SET DEFAULT выражение
    ALTER [ COLUMN ] имя_столбца DROP DEFAULT
    ALTER [ COLUMN ] имя_столбца { SET | DROP } NOT NULL
    ALTER [ COLUMN ] имя_столбца DROP EXPRESSION [ IF EXISTS ]
    ALTER [ COLUMN ] имя_столбца ADD GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( параметры_последовательности ) ]
    ALTER [ COLUMN ] имя_столбца { SET GENERATED { ALWAYS | BY DEFAULT } | SET параметр_последовательности | RESTART [ [ WITH ] значение_перезапуска ] } [...]
    ALTER [ COLUMN ] имя_столбца DROP IDENTITY [ IF EXISTS ]
    ALTER [ COLUMN ] имя_столбца SET STATISTICS целое
    ALTER [ COLUMN ] имя_столбца SET ( атрибут = значение [, ... ] )
    ALTER [ COLUMN ] имя_столбца RESET ( атрибут [, ... ] )
    ALTER [ COLUMN ] имя_столбца SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }
    ALTER [ COLUMN ] имя_столбца SET COMPRESSION метод_сжатия
    ADD ограничение_таблицы [ NOT VALID ]
    ADD ограничение_таблицы_с_индексом
    ALTER CONSTRAINT имя_ограничения [ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]
    VALIDATE CONSTRAINT имя_ограничения
    DROP CONSTRAINT [ IF EXISTS ]  имя_ограничения [ RESTRICT | CASCADE ]
    DISABLE TRIGGER [ имя_триггера | ALL | USER ]
    ENABLE TRIGGER [ имя_триггера | ALL | USER ]
    ENABLE REPLICA TRIGGER имя_триггера
    ENABLE ALWAYS TRIGGER имя_триггера
    DISABLE RULE имя_правила_перезаписи
    ENABLE RULE имя_правила_перезаписи
    ENABLE REPLICA RULE имя_правила_перезаписи
    ENABLE ALWAYS RULE имя_правила_перезаписи
    DISABLE ROW LEVEL SECURITY
    ENABLE ROW LEVEL SECURITY
    FORCE ROW LEVEL SECURITY
    NO FORCE ROW LEVEL SECURITY
    CLUSTER ON имя_индекса
    SET WITHOUT CLUSTER
    SET WITHOUT OIDS
    SET ACCESS METHOD новый_метод_доступа
    SET TABLESPACE новое_табл_пространство
    SET { LOGGED | UNLOGGED }
    SET ( параметр_хранения [= значение] [, ... ] )
    RESET ( параметр_хранения [, ... ] )
    INHERIT таблица_родитель
    NO INHERIT таблица_родитель
    OF имя_типа
    NOT OF
    OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
    REPLICA IDENTITY { DEFAULT | USING INDEX имя_индекса | FULL | NOTHING }

и указание_границ_секции:

IN ( выражение_границ_секции [, ...] ) |
FROM ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] )
  TO ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] ) |
WITH ( MODULUS числовая_константа, REMAINDER числовая_константа )

и ограничение_столбца:

[ CONSTRAINT имя_ограничения ]
{ NOT NULL |
  NULL |
  CHECK ( выражение ) [ NO INHERIT ] |
  DEFAULT выражение_по_умолчанию |
  GENERATED ALWAYS AS ( генерирующее_выражение ) STORED |
  GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( параметры_последовательности ) ] |
  UNIQUE [ NULLS [ NOT ] DISTINCT ] параметры_индекса |
  PRIMARY KEY параметры_индекса |
  REFERENCES целевая_таблица [ ( целевой_столбец ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
    [ ON DELETE ссылочное_действие ] [ ON UPDATE ссылочное_действие ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

и ограничение_таблицы:

[ CONSTRAINT имя_ограничения ]
{ CHECK ( выражение ) [ NO INHERIT ] |
  UNIQUE [ NULLS [ NOT ] DISTINCT ] ( имя_столбца [, ... ] ) параметры_индекса |
  PRIMARY KEY ( имя_столбца [, ... ] ) параметры_индекса |
  EXCLUDE [ USING метод_индекса ] ( объект_исключения WITH оператор [, ... ] ) параметры_индекса [ WHERE ( предикат ) ] |
  FOREIGN KEY ( имя_столбца [, ... ] ) REFERENCES целевая_таблица [ ( целевой_столбец [, ... ] ) ]
    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE ссылочное_действие ] [ ON UPDATE ссылочное_действие ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

и ограничение_таблицы_с_индексом:

    [ CONSTRAINT имя_ограничения ]
    { UNIQUE | PRIMARY KEY } USING INDEX имя_индекса
    [ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

параметры_индекса в ограничениях UNIQUE, PRIMARY KEY и EXCLUDE:

[ INCLUDE ( имя_столбца [, ... ] ) ]
[ WITH ( параметр_хранения [= значение] [, ... ] ) ]
[ USING INDEX TABLESPACE табл_пространство ]

объект_исключения в ограничении EXCLUDE:

{ имя_столбца | ( выражение ) } [ класс_оператора ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ]

ссылочное действие в ограничении FOREIGN KEY/REFERENCES:

{ NO ACTION | RESTRICT | CASCADE | SET NULL [ ( имя_столбца [, ... ] ) ] | SET DEFAULT [ ( имя_столбца [, ... ] ) ] }

URL: https://www.postgresql.org/docs/15/sql-altertable.html

Команда:     ALTER TABLESPACE
Описание:    изменить определение табличного пространства
Синтаксис:
ALTER TABLESPACE имя RENAME TO новое_имя
ALTER TABLESPACE имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER TABLESPACE имя SET ( параметр_табл_пространства = значение [, ... ] )
ALTER TABLESPACE имя RESET ( параметр_табл_пространства [, ... ] )

URL: https://www.postgresql.org/docs/15/sql-altertablespace.html

Команда:     ALTER TEXT SEARCH CONFIGURATION
Описание:    изменить определение конфигурации текстового поиска
Синтаксис:
ALTER TEXT SEARCH CONFIGURATION имя
    ADD MAPPING FOR тип_фрагмента [, ... ] WITH имя_словаря [, ... ]
ALTER TEXT SEARCH CONFIGURATION имя
    ALTER MAPPING FOR тип_фрагмента [, ... ] WITH имя_словаря [, ... ]
ALTER TEXT SEARCH CONFIGURATION имя
    ALTER MAPPING REPLACE старый_словарь WITH новый_словарь
ALTER TEXT SEARCH CONFIGURATION имя
    ALTER MAPPING FOR тип_фрагмента [, ... ] REPLACE старый_словарь WITH новый_словарь
ALTER TEXT SEARCH CONFIGURATION имя
    DROP MAPPING [ IF EXISTS ] FOR тип_фрагмента [, ... ]
ALTER TEXT SEARCH CONFIGURATION имя RENAME TO новое_имя
ALTER TEXT SEARCH CONFIGURATION имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER TEXT SEARCH CONFIGURATION имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altertsconfig.html

Команда:     ALTER TEXT SEARCH DICTIONARY
Описание:    изменить определение словаря текстового поиска
Синтаксис:
ALTER TEXT SEARCH DICTIONARY имя (
    параметр [ = значение ] [, ... ]
)
ALTER TEXT SEARCH DICTIONARY имя RENAME TO новое_имя
ALTER TEXT SEARCH DICTIONARY имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER TEXT SEARCH DICTIONARY имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altertsdictionary.html

Команда:     ALTER TEXT SEARCH PARSER
Описание:    изменить определение анализатора текстового поиска
Синтаксис:
ALTER TEXT SEARCH PARSER имя RENAME TO новое_имя
ALTER TEXT SEARCH PARSER имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altertsparser.html

Команда:     ALTER TEXT SEARCH TEMPLATE
Описание:    изменить определение шаблона текстового поиска
Синтаксис:
ALTER TEXT SEARCH TEMPLATE имя RENAME TO новое_имя
ALTER TEXT SEARCH TEMPLATE имя SET SCHEMA новая_схема

URL: https://www.postgresql.org/docs/15/sql-altertstemplate.html

Команда:     ALTER TRIGGER
Описание:    изменить определение триггера
Синтаксис:
ALTER TRIGGER имя ON имя_таблицы RENAME TO новое_имя
ALTER TRIGGER имя ON имя_таблицы [ NO ] DEPENDS ON EXTENSION имя_расширения

URL: https://www.postgresql.org/docs/15/sql-altertrigger.html

Команда:     ALTER TYPE
Описание:    изменить определение типа
Синтаксис:
ALTER TYPE имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER TYPE имя RENAME TO новое_имя
ALTER TYPE имя SET SCHEMA новая_схема
ALTER TYPE имя RENAME ATTRIBUTE имя_атрибута TO новое_имя_атрибута [ CASCADE | RESTRICT ]
ALTER TYPE имя действие [, ... ]
ALTER TYPE имя ADD VALUE [ IF NOT EXISTS ] новое_значение_перечисления [ { BEFORE | AFTER } соседнее_значение_перечисления ]
ALTER TYPE имя RENAME VALUE существующее_значение_перечисления TO новое_значение_перечисления
ALTER TYPE имя SET ( свойство = значение [, ... ] )

где допустимое действие:

    ADD ATTRIBUTE имя_атрибута тип_данных [ COLLATE правило_сортировки ] [ CASCADE | RESTRICT ]
    DROP ATTRIBUTE [ IF EXISTS ] имя_атрибута [ CASCADE | RESTRICT ]
    ALTER ATTRIBUTE имя_атрибута [ SET DATA ] TYPE тип_данных [ COLLATE правило_сортировки ] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-altertype.html

Команда:     ALTER USER
Описание:    изменить роль пользователя БД
Синтаксис:
ALTER USER указание_роли [ WITH ] параметр [ ... ]

где допустимые параметры:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT предел_подключений
    | [ ENCRYPTED ] PASSWORD 'пароль' | PASSWORD NULL
    | VALID UNTIL 'timestamp'

ALTER USER имя RENAME TO новое_имя

ALTER USER { указание_роли | ALL } [ IN DATABASE имя_БД ] SET параметр_конфигурации { TO | = } { значение | DEFAULT }
ALTER USER { указание_роли | ALL } [ IN DATABASE имя_БД ] SET параметр_конфигурации FROM CURRENT
ALTER USER { указание_роли | ALL } [ IN DATABASE имя_БД ] RESET параметр_конфигурации
ALTER USER { указание_роли | ALL } [ IN DATABASE имя_БД ] RESET ALL

где допустимое указание_роли:

    имя_роли
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

URL: https://www.postgresql.org/docs/15/sql-alteruser.html

Команда:     ALTER USER MAPPING
Описание:    изменить сопоставление пользователей
Синтаксис:
ALTER USER MAPPING FOR { имя_пользователя | USER | CURRENT_ROLE | CURRENT_USER | SESSION_USER | PUBLIC }
    SERVER имя_сервера
    OPTIONS ( [ ADD | SET | DROP ] параметр ['значение'] [, ... ] )

URL: https://www.postgresql.org/docs/15/sql-alterusermapping.html

Команда:     ALTER VIEW
Описание:    изменить определение представления
Синтаксис:
ALTER VIEW [ IF EXISTS ] имя ALTER [ COLUMN ] имя_столбца SET DEFAULT выражение
ALTER VIEW [ IF EXISTS ] имя ALTER [ COLUMN ] имя_столбца DROP DEFAULT
ALTER VIEW [ IF EXISTS ] имя OWNER TO { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER VIEW [ IF EXISTS ] имя RENAME [ COLUMN ] имя_столбца TO новое_имя_столбца
ALTER VIEW [ IF EXISTS ] имя RENAME TO новое_имя
ALTER VIEW [ IF EXISTS ] имя SET SCHEMA новая_схема
ALTER VIEW [ IF EXISTS ] имя SET ( имя_параметра_представления [= значение_параметра_представления] [, ... ] )
ALTER VIEW [ IF EXISTS ] имя RESET ( имя_параметра_представления [, ... ] )

URL: https://www.postgresql.org/docs/15/sql-alterview.html

Команда:     ANALYZE
Описание:    собрать статистику о базе данных
Синтаксис:
ANALYZE [ ( параметр [, ...] ) ] [ таблица_и_столбцы [, ...] ]
ANALYZE [ VERBOSE ] [ таблица_и_столбцы [, ...] ]

где допустимый параметр:

    VERBOSE [ логическое_значение ]
    SKIP_LOCKED [ логическое_значение ]

и таблица_и_столбцы:

    имя_таблицы [ ( имя_столбца [, ...] ) ]

URL: https://www.postgresql.org/docs/15/sql-analyze.html

Команда:     BEGIN
Описание:    начать транзакцию
Синтаксис:
BEGIN [ WORK | TRANSACTION ] [ режим_транзакции [, ...] ]

где допустимый режим_транзакции:

    ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
    READ WRITE | READ ONLY
    [ NOT ] DEFERRABLE

URL: https://www.postgresql.org/docs/15/sql-begin.html

Команда:     CALL
Описание:    вызвать процедуру
Синтаксис:
CALL имя ( [ аргумент ] [, ...] )

URL: https://www.postgresql.org/docs/15/sql-call.html

Команда:     CHECKPOINT
Описание:    произвести контрольную точку в журнале предзаписи
Синтаксис:
CHECKPOINT

URL: https://www.postgresql.org/docs/15/sql-checkpoint.html

Команда:     CLOSE
Описание:    закрыть курсор
Синтаксис:
CLOSE { имя | ALL }

URL: https://www.postgresql.org/docs/15/sql-close.html

Команда:     CLUSTER
Описание:    перегруппировать таблицу по индексу
Синтаксис:
CLUSTER [VERBOSE] имя_таблицы [ USING имя_индекса ]
CLUSTER ( параметр [, ...] ) имя_таблицы [ USING имя_индекса ]
CLUSTER [VERBOSE]

где допустимый параметр:

    VERBOSE [ логическое_значение ]

URL: https://www.postgresql.org/docs/15/sql-cluster.html

Команда:     COMMENT
Описание:    задать или изменить комментарий объекта
Синтаксис:
COMMENT ON
{
  ACCESS METHOD имя_объекта |
  AGGREGATE имя_агр_функции ( сигнатура_агр_функции ) |
  CAST (исходный_тип AS целевой_тип) |
  COLLATION имя_объекта |
  COLUMN имя_отношения.имя_столбца |
  CONSTRAINT имя_ограничения ON имя_таблицы |
  CONSTRAINT имя_ограничения ON DOMAIN имя_домена |
  CONVERSION имя_объекта |
  DATABASE имя_объекта |
  DOMAIN имя_объекта |
  EXTENSION имя_объекта |
  EVENT TRIGGER имя_объекта |
  FOREIGN DATA WRAPPER имя_объекта |
  FOREIGN TABLE имя_объекта |
  FUNCTION имя_функции [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  INDEX имя_объекта |
  LARGE OBJECT oid_большого_объекта |
  MATERIALIZED VIEW имя_объекта |
  OPERATOR имя_оператора (тип_слева, тип_справа) |
  OPERATOR CLASS имя_объекта USING метод_индекса |
  OPERATOR FAMILY имя_объекта USING метод_индекса |
  POLICY имя_политики ON имя_таблицы |
  [ PROCEDURAL ] LANGUAGE имя_объекта |
  PROCEDURE имя_процедуры [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  PUBLICATION имя_объекта |
  ROLE имя_объекта |
  ROUTINE имя_подпрограммы [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  RULE имя_правила ON имя_таблицы |
  SCHEMA имя_объекта |
  SEQUENCE имя_объекта |
  SERVER имя_объекта |
  STATISTICS имя_объекта |
  SUBSCRIPTION имя_объекта |
  TABLE имя_объекта |
  TABLESPACE имя_объекта |
  TEXT SEARCH CONFIGURATION имя_объекта |
  TEXT SEARCH DICTIONARY имя_объекта |
  TEXT SEARCH PARSER имя_объекта |
  TEXT SEARCH TEMPLATE имя_объекта |
  TRANSFORM FOR имя_типа LANGUAGE имя_языка |
  TRIGGER имя_триггера ON имя_таблицы |
  TYPE имя_объекта |
  VIEW имя_объекта
} IS { строковая_константа | NULL }

где сигнатура_агр_функции:

* |
[ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] |
[ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] ] ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ]

URL: https://www.postgresql.org/docs/15/sql-comment.html

Команда:     COMMIT
Описание:    зафиксировать текущую транзакцию
Синтаксис:
COMMIT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

URL: https://www.postgresql.org/docs/15/sql-commit.html

Команда:     COMMIT PREPARED
Описание:    зафиксировать транзакцию, ранее подготовленную для двухфазной фиксации
Синтаксис:
COMMIT PREPARED код_транзакции

URL: https://www.postgresql.org/docs/15/sql-commit-prepared.html

Команда:     COPY
Описание:    импорт/экспорт данных в файл
Синтаксис:
COPY имя_таблицы [ ( имя_столбца [, ...] ) ]
    FROM { 'имя_файла' | PROGRAM 'команда' | STDIN }
    [ [ WITH ] ( параметр [, ...] ) ]
    [ WHERE условие ]

COPY { имя_таблицы [ ( имя_столбца [, ...] ) ] | ( запрос ) }
    TO { 'имя_файла' | PROGRAM 'команда' | STDOUT }
    [ [ WITH ] ( параметр [, ...] ) ]

где допустимый параметр:

    FORMAT имя_формата
    FREEZE [ логическое_значение ]
    DELIMITER 'символ_разделитель'
    NULL 'представление_NULL'
    HEADER [ логическое_значение | MATCH ]
    QUOTE 'символ_кавычек'
    ESCAPE 'спецсимвол'
    FORCE_QUOTE { ( имя_столбца [, ...] ) | * }
    FORCE_NOT_NULL ( имя_столбца [, ...] )
    FORCE_NULL ( имя_столбца [, ...] )
    ENCODING 'имя_кодировки'

URL: https://www.postgresql.org/docs/15/sql-copy.html

Команда:     CREATE ACCESS METHOD
Описание:    создать новый метод доступа
Синтаксис:
CREATE ACCESS METHOD имя
    TYPE тип_метода_доступа
    HANDLER функция_обработчик

URL: https://www.postgresql.org/docs/15/sql-create-access-method.html

Команда:     CREATE AGGREGATE
Описание:    создать агрегатную функцию
Синтаксис:
CREATE [ OR REPLACE ] AGGREGATE имя ( [ режим_аргумента ] [ имя_аргумента ] тип_данных_аргумента [ , ... ] ) (
    SFUNC = функция_состояния,
    STYPE = тип_данных_состояния
    [ , SSPACE = размер_данных_состояния ]
    [ , FINALFUNC = функция_завершения ]
    [ , FINALFUNC_EXTRA ]
    [ , FINALFUNC_MODIFY = { READ_ONLY | SHAREABLE | READ_WRITE } ]
    [ , COMBINEFUNC = комбинирующая_функция ]
    [ , SERIALFUNC = функция_сериализации ]
    [ , DESERIALFUNC = функция_десериализации ]
    [ , INITCOND = начальное_условие ]
    [ , MSFUNC = функция_состояния_движ ]
    [ , MINVFUNC = обратная_функция_движ ]
    [ , MSTYPE = тип_данных_состояния_движ ]
    [ , MSSPACE = размер_данных_состояния_движ ]
    [ , MFINALFUNC = функция_завершения_движ ]
    [ , MFINALFUNC_EXTRA ]
    [ , MFINALFUNC_MODIFY = { READ_ONLY | SHAREABLE | READ_WRITE } ]
    [ , MINITCOND = начальное_условие_движ ]
    [ , SORTOP = оператор_сортировки ]
    [ , PARALLEL = { SAFE | RESTRICTED | UNSAFE } ]
)

CREATE [ OR REPLACE ] AGGREGATE имя ( [ [ режим_аргумента ] [ имя_аргумента ] тип_данных_аргумента [ , ... ] ]
                        ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_данных_аргумента [ , ... ] ) (
    SFUNC = функция_состояния,
    STYPE = тип_данных_состояния
    [ , SSPACE = размер_данных_состояния ]
    [ , FINALFUNC = функция_завершения ]
    [ , FINALFUNC_EXTRA ]
    [ , FINALFUNC_MODIFY = { READ_ONLY | SHAREABLE | READ_WRITE } ]
    [ , INITCOND = начальное_условие ]
    [ , PARALLEL = { SAFE | RESTRICTED | UNSAFE } ]
    [ , HYPOTHETICAL ]
)

или старый синтаксис

CREATE [ OR REPLACE ] AGGREGATE имя (
    BASETYPE = базовый_тип,
    SFUNC = функция_состояния,
    STYPE = тип_данных_состояния
    [ , SSPACE = размер_данных_состояния ]
    [ , FINALFUNC = функция_завершения ]
    [ , FINALFUNC_EXTRA ]
    [ , FINALFUNC_MODIFY = { READ_ONLY | SHAREABLE | READ_WRITE } ]
    [ , COMBINEFUNC = комбинирующая_функция ]
    [ , SERIALFUNC = функция_сериализации ]
    [ , DESERIALFUNC = функция_десериализации ]
    [ , INITCOND = начальное_условие ]
    [ , MSFUNC = функция_состояния_движ ]
    [ , MINVFUNC = обратная_функция_движ ]
    [ , MSTYPE = тип_данных_состояния_движ ]
    [ , MSSPACE = размер_данных_состояния_движ ]
    [ , MFINALFUNC = функция_завершения_движ ]
    [ , MFINALFUNC_EXTRA ]
    [ , MFINALFUNC_MODIFY = { READ_ONLY | SHAREABLE | READ_WRITE } ]
    [ , MINITCOND = начальное_условие_движ ]
    [ , SORTOP = оператор_сортировки ]
)

URL: https://www.postgresql.org/docs/15/sql-createaggregate.html

Команда:     CREATE CAST
Описание:    создать приведение типов
Синтаксис:
CREATE CAST (исходный_тип AS целевой_тип)
    WITH FUNCTION имя_функции [ (тип_аргумента [, ...]) ]
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (исходный_тип AS целевой_тип)
    WITHOUT FUNCTION
    [ AS ASSIGNMENT | AS IMPLICIT ]

CREATE CAST (исходный_тип AS целевой_тип)
    WITH INOUT
    [ AS ASSIGNMENT | AS IMPLICIT ]

URL: https://www.postgresql.org/docs/15/sql-createcast.html

Команда:     CREATE COLLATION
Описание:    создать правило сортировки
Синтаксис:
CREATE COLLATION [ IF NOT EXISTS ] имя (
    [ LOCALE = код_локали, ]
    [ LC_COLLATE = код_правила_сортировки, ]
    [ LC_CTYPE = код_классификации_символов, ]
    [ PROVIDER = провайдер, ]
    [ DETERMINISTIC = логическое_значение, ]
    [ VERSION = версия ]
)
CREATE COLLATION [ IF NOT EXISTS ] имя FROM существующее_правило_сортировки

URL: https://www.postgresql.org/docs/15/sql-createcollation.html

Команда:     CREATE CONVERSION
Описание:    создать преобразование кодировки
Синтаксис:
CREATE [ DEFAULT ] CONVERSION имя
    FOR исходная_кодировка TO целевая_кодировка FROM имя_функции

URL: https://www.postgresql.org/docs/15/sql-createconversion.html

Команда:     CREATE DATABASE
Описание:    создать базу данных
Синтаксис:
CREATE DATABASE имя
    [ WITH ] [ OWNER [=] имя_пользователя ]
           [ TEMPLATE [=] шаблон ]
           [ ENCODING [=] кодировка ]
           [ STRATEGY [=] стратегия ] ]
           [ LOCALE [=] код_локали ]
           [ LC_COLLATE [=] код_правила_сортировки ]
           [ LC_CTYPE [=] код_классификации_символов ]
           [ ICU_LOCALE [=] локаль_icu ]
           [ LOCALE_PROVIDER [=] провайдер_локали ]
           [ COLLATION_VERSION = версия_правила_сортировки ]
           [ TABLESPACE [=] табл_пространство ]
           [ ALLOW_CONNECTIONS [=] разр_подключения ]
           [ CONNECTION LIMIT [=] предел_подключений ]
           [ IS_TEMPLATE [=] это_шаблон ]
           [ OID [=] oid ]

URL: https://www.postgresql.org/docs/15/sql-createdatabase.html

Команда:     CREATE DOMAIN
Описание:    создать домен
Синтаксис:
CREATE DOMAIN имя [ AS ] тип_данных
    [ COLLATE правило_сортировки ]
    [ DEFAULT выражение ]
    [ ограничение [ ... ] ]

где ограничение:

[ CONSTRAINT имя_ограничения ]
{ NOT NULL | NULL | CHECK (выражение) }

URL: https://www.postgresql.org/docs/15/sql-createdomain.html

Команда:     CREATE EVENT TRIGGER
Описание:    создать событийный триггер
Синтаксис:
CREATE EVENT TRIGGER имя
    ON событие
    [ WHEN переменная_фильтра IN (значение_фильтра [, ... ]) [ AND ... ] ]
    EXECUTE { FUNCTION | PROCEDURE } имя_функции()

URL: https://www.postgresql.org/docs/15/sql-createeventtrigger.html

Команда:     CREATE EXTENSION
Описание:    установить расширение
Синтаксис:
CREATE EXTENSION [ IF NOT EXISTS ] имя_расширения
    [ WITH ] [ SCHEMA имя_схемы ]
             [ VERSION версия ]
             [ CASCADE ]

URL: https://www.postgresql.org/docs/15/sql-createextension.html

Команда:     CREATE FOREIGN DATA WRAPPER
Описание:    создать обёртку сторонних данных
Синтаксис:
CREATE FOREIGN DATA WRAPPER имя
    [ HANDLER функция_обработчик | NO HANDLER ]
    [ VALIDATOR функция_проверки | NO VALIDATOR ]
    [ OPTIONS ( параметр 'значение' [, ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-createforeigndatawrapper.html

Команда:     CREATE FOREIGN TABLE
Описание:    создать стороннюю таблицу
Синтаксис:
CREATE FOREIGN TABLE [ IF NOT EXISTS ] имя_таблицы ( [
  { имя_столбца тип_данных [ OPTIONS ( параметр 'значение' [, ... ] ) ] [ COLLATE правило_сортировки ] [ ограничение_столбца [ ... ] ]
    | ограничение_таблицы }
    [, ... ]
] )
[ INHERITS ( таблица_родитель [, ... ] ) ]
  SERVER имя_сервера
[ OPTIONS ( параметр 'значение' [, ... ] ) ]

CREATE FOREIGN TABLE [ IF NOT EXISTS ] имя_таблицы
  PARTITION OF таблица_родитель [ (
  { имя_столбца [ WITH OPTIONS ] [ ограничение_столбца [ ... ] ]
    | ограничение_таблицы }
    [, ... ]
) ]
{ FOR VALUES указание_границ_секции | DEFAULT }
  SERVER имя_сервера
[ OPTIONS ( параметр 'значение' [, ... ] ) ]

где ограничение_столбца:

[ CONSTRAINT имя_ограничения ]
{ NOT NULL |
  NULL |
  CHECK ( выражение ) [ NO INHERIT ] |
  DEFAULT выражение_по_умолчанию |
  GENERATED ALWAYS AS ( генерирующее_выражение ) STORED }

и ограничение_таблицы:

[ CONSTRAINT имя_ограничения ]
CHECK ( выражение ) [ NO INHERIT ]

и указание_границ_секции:

IN ( выражение_границ_секции [, ...] ) |
FROM ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] )
  TO ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] ) |
WITH ( MODULUS числовая_константа, REMAINDER числовая_константа )

URL: https://www.postgresql.org/docs/15/sql-createforeigntable.html

Команда:     CREATE FUNCTION
Описание:    создать функцию
Синтаксис:
CREATE [ OR REPLACE ] FUNCTION
    имя ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ { DEFAULT | = } выражение_по_умолчанию ] [, ...] ] )
    [ RETURNS тип_возврата
      | RETURNS TABLE ( имя_столбца тип_столбца [, ...] ) ]
  { LANGUAGE имя_языка
    | TRANSFORM { FOR TYPE имя_типа } [, ... ]
    | WINDOW
    | { IMMUTABLE | STABLE | VOLATILE }
    | [ NOT ] LEAKPROOF
    | { CALLED ON NULL INPUT | RETURNS NULL ON NULL INPUT | STRICT }
    | { [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER }
    | PARALLEL { UNSAFE | RESTRICTED | SAFE }
    | COST стоимость_выполнения
    | ROWS строк_в_результате
    | SUPPORT вспомогательная_функция
    | SET параметр_конфигурации { TO значение | = значение | FROM CURRENT }
    | AS 'определение'
    | AS 'объектный_файл', 'символ_в_экспорте'
    | тело_sql
  } ...

URL: https://www.postgresql.org/docs/15/sql-createfunction.html

Команда:     CREATE GROUP
Описание:    создать роль пользователя БД
Синтаксис:
CREATE GROUP имя [ [ WITH ] параметр [ ... ] ]

где допустимые параметры:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT предел_подключений
    | [ ENCRYPTED ] PASSWORD 'пароль' | PASSWORD NULL
    | VALID UNTIL 'timestamp'
    | IN ROLE имя_роли [, ...]
    | IN GROUP имя_роли [, ...]
    | ROLE имя_роли [, ...]
    | ADMIN имя_роли [, ...]
    | USER имя_роли [, ...]
    | SYSID uid

URL: https://www.postgresql.org/docs/15/sql-creategroup.html

Команда:     CREATE INDEX
Описание:    создать индекс
Синтаксис:
CREATE [ UNIQUE ] INDEX [ CONCURRENTLY ] [ [ IF NOT EXISTS ] имя ] ON [ ONLY ] имя_таблицы [ USING метод ]
    ( { имя_столбца | ( выражение ) } [ COLLATE правило_сортировки ] [ класс_оператора [ ( параметр_класса_оп = значение [, ... ] ) ] ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ] [, ...] )
    [ INCLUDE ( имя_столбца [, ...] ) ]
    [ NULLS [ NOT ] DISTINCT ]
    [ WITH ( параметр_хранения [= значение] [, ... ] ) ]
    [ TABLESPACE табл_пространство ]
    [ WHERE предикат ]

URL: https://www.postgresql.org/docs/15/sql-createindex.html

Команда:     CREATE LANGUAGE
Описание:    создать процедурный язык
Синтаксис:
CREATE [ OR REPLACE ] [ TRUSTED ] [ PROCEDURAL ] LANGUAGE имя
    HANDLER обработчик_вызова [ INLINE обработчик_внедрённого_кода ] [ VALIDATOR функция_проверки ]
CREATE [ OR REPLACE ] [ TRUSTED ] [ PROCEDURAL ] LANGUAGE имя

URL: https://www.postgresql.org/docs/15/sql-createlanguage.html

Команда:     CREATE MATERIALIZED VIEW
Описание:    создать материализованное представление
Синтаксис:
CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] имя_таблицы
    [ (имя_столбца [, ...] ) ]
    [ USING метод ]
    [ WITH ( параметр_хранения [= значение] [, ... ] ) ]
    [ TABLESPACE табл_пространство ]
    AS запрос
    [ WITH [ NO ] DATA ]

URL: https://www.postgresql.org/docs/15/sql-creatematerializedview.html

Команда:     CREATE OPERATOR
Описание:    создать оператор
Синтаксис:
CREATE OPERATOR имя (
    {FUNCTION|PROCEDURE} = имя_функции
    [, LEFTARG = тип_слева ] [, RIGHTARG = тип_справа ]
    [, COMMUTATOR = коммут_оператор ] [, NEGATOR = обратный_оператор ]
    [, RESTRICT = процедура_ограничения ] [, JOIN = процедура_соединения ]
    [, HASHES ] [, MERGES ]
)

URL: https://www.postgresql.org/docs/15/sql-createoperator.html

Команда:     CREATE OPERATOR CLASS
Описание:    создать класс операторов
Синтаксис:
CREATE OPERATOR CLASS имя [ DEFAULT ] FOR TYPE тип_данных
  USING метод_индекса [ FAMILY имя_семейства ] AS
  {  OPERATOR номер_стратегии имя_оператора [ ( тип_операции, тип_операции ) ] [ FOR SEARCH | FOR ORDER BY семейство_сортировки ]
   | FUNCTION номер_опорной_процедуры [ ( тип_операции [ , тип_операции ] ) ] имя_функции ( тип_аргумента [, ...] )
   | STORAGE тип_хранения
  } [, ... ]

URL: https://www.postgresql.org/docs/15/sql-createopclass.html

Команда:     CREATE OPERATOR FAMILY
Описание:    создать семейство операторов
Синтаксис:
CREATE OPERATOR FAMILY имя USING метод_индекса

URL: https://www.postgresql.org/docs/15/sql-createopfamily.html

Команда:     CREATE POLICY
Описание:    создать новую политику защиты на уровне строк для таблицы
Синтаксис:
CREATE POLICY имя ON имя_таблицы
    [ AS { PERMISSIVE | RESTRICTIVE } ]
    [ FOR { ALL | SELECT | INSERT | UPDATE | DELETE } ]
    [ TO { имя_роли | PUBLIC | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...] ]
    [ USING ( выражение_использования ) ]
    [ WITH CHECK ( выражение_проверки ) ]

URL: https://www.postgresql.org/docs/15/sql-createpolicy.html

Команда:     CREATE PROCEDURE
Описание:    создать процедуру
Синтаксис:
CREATE [ OR REPLACE ] PROCEDURE
    имя ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ { DEFAULT | = } выражение_по_умолчанию ] [, ...] ] )
  { LANGUAGE имя_языка
    | TRANSFORM { FOR TYPE имя_типа } [, ... ]
    | [ EXTERNAL ] SECURITY INVOKER | [ EXTERNAL ] SECURITY DEFINER
    | SET параметр_конфигурации { TO значение | = значение | FROM CURRENT }
    | AS 'определение'
    | AS 'объектный_файл', 'символ_в_экспорте'
    | тело_sql
  } ...

URL: https://www.postgresql.org/docs/15/sql-createprocedure.html

Команда:     CREATE PUBLICATION
Описание:    создать публикацию
Синтаксис:
CREATE PUBLICATION имя
    [ FOR ALL TABLES
      | FOR объект_публикации [, ... ] ]
    [ WITH ( параметр_публикации [= значение] [, ... ] ) ]

где объект_публикации:

    TABLE [ ONLY ] имя_таблицы [ * ] [ ( имя_столбца [, ... ] ) ] [ WHERE ( выражение ) ] [, ... ]
    TABLES IN SCHEMA { имя_схемы | CURRENT_SCHEMA } [, ... ]

URL: https://www.postgresql.org/docs/15/sql-createpublication.html

Команда:     CREATE ROLE
Описание:    создать роль пользователя БД
Синтаксис:
CREATE ROLE имя [ [ WITH ] параметр [ ... ] ]

где допустимые параметры:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT предел_подключений
    | [ ENCRYPTED ] PASSWORD 'пароль' | PASSWORD NULL
    | VALID UNTIL 'timestamp'
    | IN ROLE имя_роли [, ...]
    | IN GROUP имя_роли [, ...]
    | ROLE имя_роли [, ...]
    | ADMIN имя_роли [, ...]
    | USER имя_роли [, ...]
    | SYSID uid

URL: https://www.postgresql.org/docs/15/sql-createrole.html

Команда:     CREATE RULE
Описание:    создать правило перезаписи
Синтаксис:
CREATE [ OR REPLACE ] RULE имя AS ON событие
    TO имя_таблицы [ WHERE условие ]
    DO [ ALSO | INSTEAD ] { NOTHING | команда | ( команда ; команда ... ) }

где допустимое событие:

    SELECT | INSERT | UPDATE | DELETE

URL: https://www.postgresql.org/docs/15/sql-createrule.html

Команда:     CREATE SCHEMA
Описание:    создать схему
Синтаксис:
CREATE SCHEMA имя_схемы [ AUTHORIZATION указание_роли ] [ элемент_схемы [ ... ] ]
CREATE SCHEMA AUTHORIZATION указание_роли [ элемент_схемы [ ... ] ]
CREATE SCHEMA IF NOT EXISTS имя_схемы [ AUTHORIZATION указание_роли ]
CREATE SCHEMA IF NOT EXISTS AUTHORIZATION указание_роли

где допустимое указание_роли:

    имя_пользователя
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

URL: https://www.postgresql.org/docs/15/sql-createschema.html

Команда:     CREATE SEQUENCE
Описание:    создать генератор последовательностей
Синтаксис:
CREATE [ { TEMPORARY | TEMP } | UNLOGGED ] SEQUENCE [ IF NOT EXISTS ] имя
    [ AS тип_данных ]
    [ INCREMENT [ BY ] шаг ]
    [ MINVALUE мин_значение | NO MINVALUE ] [ MAXVALUE макс_значение | NO MAXVALUE ]
    [ START [ WITH ] начальное_значение ] [ CACHE кеш ] [ [ NO ] CYCLE ]
    [ OWNED BY { имя_таблицы.имя_столбца | NONE } ]

URL: https://www.postgresql.org/docs/15/sql-createsequence.html

Команда:     CREATE SERVER
Описание:    создать сторонний сервер
Синтаксис:
CREATE SERVER [ IF NOT EXISTS ] имя_сервера [ TYPE 'тип_сервера' ] [ VERSION 'версия_сервера' ]
    FOREIGN DATA WRAPPER имя_обёртки_сторонних_данных
    [ OPTIONS ( параметр 'значение' [, ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-createserver.html

Команда:     CREATE STATISTICS
Описание:    создать расширенную статистику
Синтаксис:
CREATE STATISTICS [ IF NOT EXISTS ] имя_статистики
    ON ( выражение )
    FROM имя_таблицы

CREATE STATISTICS [ IF NOT EXISTS ] имя_статистики
    [ ( вид_статистики [, ... ] ) ]
    ON { имя_столбца | ( выражение ) }, { имя_столбца | ( выражение ) } [, ...]
    FROM имя_таблицы

URL: https://www.postgresql.org/docs/15/sql-createstatistics.html

Команда:     CREATE SUBSCRIPTION
Описание:    создать подписку
Синтаксис:
CREATE SUBSCRIPTION имя_подписки
    CONNECTION 'строка_подключения'
    PUBLICATION имя_публикации [, ...]
    [ WITH ( параметр_подписки [= значение] [, ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-createsubscription.html

Команда:     CREATE TABLE
Описание:    создать таблицу
Синтаксис:
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] имя_таблицы ( [
  { имя_столбца тип_данных [ COMPRESSION метод_сжатия ] [ COLLATE правило_сортировки ] [ ограничение_столбца [ ... ] ]
    | ограничение_таблицы
    | LIKE исходная_таблица [ параметр_порождения ... ] }
    [, ... ]
] )
[ INHERITS ( таблица_родитель [, ... ] ) ]
[ PARTITION BY { RANGE | LIST | HASH } ( { имя_столбца | ( выражение ) } [ COLLATE правило_сортировки ] [ класс_оператора ] [, ... ] ) ]
[ USING метод ]
[ WITH ( параметр_хранения [= значение] [, ... ] ) | WITHOUT OIDS ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ TABLESPACE табл_пространство ]

CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] имя_таблицы
    OF имя_типа [ (
  { имя_столбца [ WITH OPTIONS ] [ ограничение_столбца [ ... ] ]
    | ограничение_таблицы }
    [, ... ]
) ]
[ PARTITION BY { RANGE | LIST | HASH } ( { имя_столбца | ( выражение ) } [ COLLATE правило_сортировки ] [ класс_оператора ] [, ... ] ) ]
[ USING метод ]
[ WITH ( параметр_хранения [= значение] [, ... ] ) | WITHOUT OIDS ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ TABLESPACE табл_пространство ]

CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] имя_таблицы
    PARTITION OF таблица_родитель [ (
  { имя_столбца [ WITH OPTIONS ] [ ограничение_столбца [ ... ] ]
    | ограничение_таблицы }
    [, ... ]
) ] { FOR VALUES указание_границ_секции | DEFAULT }
[ PARTITION BY { RANGE | LIST | HASH } ( { имя_столбца | ( выражение ) } [ COLLATE правило_сортировки ] [ класс_оператора ] [, ... ] ) ]
[ USING метод ]
[ WITH ( параметр_хранения [= значение] [, ... ] ) | WITHOUT OIDS ]
[ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
[ TABLESPACE табл_пространство ]

где ограничение_столбца:

[ CONSTRAINT имя_ограничения ]
{ NOT NULL |
  NULL |
  CHECK ( выражение ) [ NO INHERIT ] |
  DEFAULT выражение_по_умолчанию |
  GENERATED ALWAYS AS ( генерирующее_выражение ) STORED |
  GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( параметры_последовательности ) ] |
  UNIQUE [ NULLS [ NOT ] DISTINCT ] параметры_индекса |
  PRIMARY KEY параметры_индекса |
  REFERENCES целевая_таблица [ ( целевой_столбец ) ] [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ]
    [ ON DELETE ссылочное_действие ] [ ON UPDATE ссылочное_действие ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

и ограничение_таблицы:

[ CONSTRAINT имя_ограничения ]
{ CHECK ( выражение ) [ NO INHERIT ] |
  UNIQUE [ NULLS [ NOT ] DISTINCT ] ( имя_столбца [, ... ] ) параметры_индекса |
  PRIMARY KEY ( имя_столбца [, ... ] ) параметры_индекса |
  EXCLUDE [ USING метод_индекса ] ( объект_исключения WITH оператор [, ... ] ) параметры_индекса [ WHERE ( предикат ) ] |
  FOREIGN KEY ( имя_столбца [, ... ] ) REFERENCES целевая_таблица [ ( целевой_столбец [, ... ] ) ]
    [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE ссылочное_действие ] [ ON UPDATE ссылочное_действие ] }
[ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]

и параметр_порождения:

{ INCLUDING | EXCLUDING } { COMMENTS | COMPRESSION | CONSTRAINTS | DEFAULTS | GENERATED | IDENTITY | INDEXES | STATISTICS | STORAGE | ALL }

и указание_границ_секции:

IN ( выражение_границ_секции [, ...] ) |
FROM ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] )
  TO ( { выражение_границ_секции | MINVALUE | MAXVALUE } [, ...] ) |
WITH ( MODULUS числовая_константа, REMAINDER числовая_константа )

параметры_индекса в ограничениях UNIQUE, PRIMARY KEY и EXCLUDE:

[ INCLUDE ( имя_столбца [, ... ] ) ]
[ WITH ( параметр_хранения [= значение] [, ... ] ) ]
[ USING INDEX TABLESPACE табл_пространство ]

объект_исключения в ограничении EXCLUDE:

{ имя_столбца | ( выражение ) } [ класс_оператора ] [ ASC | DESC ] [ NULLS { FIRST | LAST } ]

ссылочное действие в ограничении FOREIGN KEY/REFERENCES:

{ NO ACTION | RESTRICT | CASCADE | SET NULL [ ( имя_столбца [, ... ] ) ] | SET DEFAULT [ ( имя_столбца [, ... ] ) ] }

URL: https://www.postgresql.org/docs/15/sql-createtable.html

Команда:     CREATE TABLE AS
Описание:    создать таблицу из результатов запроса
Синтаксис:
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] имя_таблицы
    [ (имя_столбца [, ...] ) ]
    [ USING метод ]
    [ WITH ( параметр_хранения [= значение] [, ... ] ) | WITHOUT OIDS ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ TABLESPACE табл_пространство ]
    AS запрос
    [ WITH [ NO ] DATA ]

URL: https://www.postgresql.org/docs/15/sql-createtableas.html

Команда:     CREATE TABLESPACE
Описание:    создать табличное пространство
Синтаксис:
CREATE TABLESPACE табл_пространство
    [ OWNER { новый_владелец | CURRENT_ROLE | CURRENT_USER | SESSION_USER } ]
    LOCATION 'каталог'
    [ WITH ( параметр_табл_пространства = значение [, ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-createtablespace.html

Команда:     CREATE TEXT SEARCH CONFIGURATION
Описание:    создать конфигурацию текстового поиска
Синтаксис:
CREATE TEXT SEARCH CONFIGURATION имя (
    PARSER = имя_анализатора |
    COPY = исходная_конфигурация
)

URL: https://www.postgresql.org/docs/15/sql-createtsconfig.html

Команда:     CREATE TEXT SEARCH DICTIONARY
Описание:    создать словарь текстового поиска
Синтаксис:
CREATE TEXT SEARCH DICTIONARY имя (
    TEMPLATE = шаблон
    [, параметр = значение [, ... ]]
)

URL: https://www.postgresql.org/docs/15/sql-createtsdictionary.html

Команда:     CREATE TEXT SEARCH PARSER
Описание:    создать анализатор текстового поиска
Синтаксис:
CREATE TEXT SEARCH PARSER имя (
    START = функция_начала ,
    GETTOKEN = функция_выдачи_фрагмента ,
    END = функция_окончания ,
    LEXTYPES = функция_лекс_типов
    [, HEADLINE = функция_создания_выдержек ]
)

URL: https://www.postgresql.org/docs/15/sql-createtsparser.html

Команда:     CREATE TEXT SEARCH TEMPLATE
Описание:    создать шаблон текстового поиска
Синтаксис:
CREATE TEXT SEARCH TEMPLATE имя (
    [ INIT = функция_инициализации , ]
    LEXIZE = функция_выделения_лексем
)

URL: https://www.postgresql.org/docs/15/sql-createtstemplate.html

Команда:     CREATE TRANSFORM
Описание:    создать преобразование
Синтаксис:
CREATE [ OR REPLACE ] TRANSFORM FOR имя_типа LANGUAGE имя_языка (
    FROM SQL WITH FUNCTION имя_функции_из_sql [ (тип_аргумента [, ...]) ],
    TO SQL WITH FUNCTION имя_функции_в_sql [ (тип_аргумента [, ...]) ]
);

URL: https://www.postgresql.org/docs/15/sql-createtransform.html

Команда:     CREATE TRIGGER
Описание:    создать триггер
Синтаксис:
CREATE [ OR REPLACE ] [ CONSTRAINT ] TRIGGER имя { BEFORE | AFTER | INSTEAD OF } { событие [ OR ... ] }
    ON имя_таблицы
    [ FROM ссылающаяся_таблица ]
    [ NOT DEFERRABLE | [ DEFERRABLE ] [ INITIALLY IMMEDIATE | INITIALLY DEFERRED ] ]
    [ REFERENCING { { OLD | NEW } TABLE [ AS ] имя_переходного_отношения } [ ... ] ]
    [ FOR [ EACH ] { ROW | STATEMENT } ]
    [ WHEN ( условие ) ]
    EXECUTE { FUNCTION | PROCEDURE } имя_функции ( аргументы )

где допустимое событие:

    INSERT
    UPDATE [ OF имя_столбца [, ... ] ]
    DELETE
    TRUNCATE

URL: https://www.postgresql.org/docs/15/sql-createtrigger.html

Команда:     CREATE TYPE
Описание:    создать тип данных
Синтаксис:
CREATE TYPE имя AS
    ( [ имя_атрибута тип_данных [ COLLATE правило_сортировки ] [, ... ] ] )

CREATE TYPE имя AS ENUM
    ( [ 'метка' [, ... ] ] )

CREATE TYPE имя AS RANGE (
    SUBTYPE = подтип
    [ , SUBTYPE_OPCLASS = класс_оператора_подтипа ]
    [ , COLLATION = правило_сортировки ]
    [ , CANONICAL = каноническая_функция ]
    [ , SUBTYPE_DIFF = функция_различий_подтипа ]
    [ , MULTIRANGE_TYPE_NAME = имя_мультидиапазонного_типа ]
)

CREATE TYPE имя (
    INPUT = функция_ввода,
    OUTPUT = функция_вывода
    [ , RECEIVE = функция_получения ]
    [ , SEND = функция_отправки ]
    [ , TYPMOD_IN = функция_ввода_модификатора_типа ]
    [ , TYPMOD_OUT = функция_вывода_модификатора_типа ]
    [ , ANALYZE = функция_анализа ]
    [ , SUBSCRIPT = функция_обращения_по_индексу ]
    [ , INTERNALLENGTH = { внутр_длина | VARIABLE } ]
    [ , PASSEDBYVALUE ]
    [ , ALIGNMENT = выравнивание ]
    [ , STORAGE = хранение ]
    [ , LIKE = тип_образец ]
    [ , CATEGORY = категория ]
    [ , PREFERRED = предпочитаемый ]
    [ , DEFAULT = по_умолчанию ]
    [ , ELEMENT = элемент ]
    [ , DELIMITER = разделитель ]
    [ , COLLATABLE = сортируемый ]
)

CREATE TYPE имя

URL: https://www.postgresql.org/docs/15/sql-createtype.html

Команда:     CREATE USER
Описание:    создать роль пользователя БД
Синтаксис:
CREATE USER имя [ [ WITH ] параметр [ ... ] ]

где допустимые параметры:

      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT предел_подключений
    | [ ENCRYPTED ] PASSWORD 'пароль' | PASSWORD NULL
    | VALID UNTIL 'timestamp'
    | IN ROLE имя_роли [, ...]
    | IN GROUP имя_роли [, ...]
    | ROLE имя_роли [, ...]
    | ADMIN имя_роли [, ...]
    | USER имя_роли [, ...]
    | SYSID uid

URL: https://www.postgresql.org/docs/15/sql-createuser.html

Команда:     CREATE USER MAPPING
Описание:    создать сопоставление пользователя для стороннего сервера
Синтаксис:
CREATE USER MAPPING [ IF NOT EXISTS ] FOR { имя_пользователя | USER | CURRENT_ROLE | CURRENT_USER | PUBLIC }
    SERVER имя_сервера
    [ OPTIONS ( параметр 'значение' [ , ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-createusermapping.html

Команда:     CREATE VIEW
Описание:    создать представление
Синтаксис:
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] [ RECURSIVE ] VIEW имя [ ( имя_столбца [, ...] ) ]
    [ WITH ( имя_параметра_представления [= значение_параметра_представления] [, ... ] ) ]
    AS запрос
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ]

URL: https://www.postgresql.org/docs/15/sql-createview.html

Команда:     DEALLOCATE
Описание:    освободить подготовленный оператор
Синтаксис:
DEALLOCATE [ PREPARE ] { имя | ALL }

URL: https://www.postgresql.org/docs/15/sql-deallocate.html

Команда:     DECLARE
Описание:    создать курсор
Синтаксис:
DECLARE имя [ BINARY ] [ ASENSITIVE | INSENSITIVE ] [ [ NO ] SCROLL ]
    CURSOR [ { WITH | WITHOUT } HOLD ] FOR запрос

URL: https://www.postgresql.org/docs/15/sql-declare.html

Команда:     DELETE
Описание:    удалить записи таблицы
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
DELETE FROM [ ONLY ] имя_таблицы [ * ] [ [ AS ] псевдоним ]
    [ USING источник_данных [, ...] ]
    [ WHERE условие | WHERE CURRENT OF имя_курсора ]
    [ RETURNING * | выражение_результата [ [ AS ] имя_результата ] [, ...] ]

URL: https://www.postgresql.org/docs/15/sql-delete.html

Команда:     DISCARD
Описание:    очистить состояние сеанса
Синтаксис:
DISCARD { ALL | PLANS | SEQUENCES | TEMPORARY | TEMP }

URL: https://www.postgresql.org/docs/15/sql-discard.html

Команда:     DO
Описание:    выполнить анонимный блок кода
Синтаксис:
DO [ LANGUAGE имя_языка ] внедрённый_код

URL: https://www.postgresql.org/docs/15/sql-do.html

Команда:     DROP ACCESS METHOD
Описание:    удалить метод доступа
Синтаксис:
DROP ACCESS METHOD [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-drop-access-method.html

Команда:     DROP AGGREGATE
Описание:    удалить агрегатную функцию
Синтаксис:
DROP AGGREGATE [ IF EXISTS ] имя ( сигнатура_агр_функции ) [, ...] [ CASCADE | RESTRICT ]

где сигнатура_агр_функции:

* |
[ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] |
[ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] ] ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ]

URL: https://www.postgresql.org/docs/15/sql-dropaggregate.html

Команда:     DROP CAST
Описание:    удалить приведение типа
Синтаксис:
DROP CAST [ IF EXISTS ] (исходный_тип AS целевой_тип) [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropcast.html

Команда:     DROP COLLATION
Описание:    удалить правило сортировки
Синтаксис:
DROP COLLATION [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropcollation.html

Команда:     DROP CONVERSION
Описание:    удалить преобразование
Синтаксис:
DROP CONVERSION [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropconversion.html

Команда:     DROP DATABASE
Описание:    удалить базу данных
Синтаксис:
DROP DATABASE [ IF EXISTS ] имя [ [ WITH ] ( параметр [, ...] ) ]

где допустимые параметры:

    FORCE

URL: https://www.postgresql.org/docs/15/sql-dropdatabase.html

Команда:     DROP DOMAIN
Описание:    удалить домен
Синтаксис:
DROP DOMAIN [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropdomain.html

Команда:     DROP EVENT TRIGGER
Описание:    удалить событийный триггер
Синтаксис:
DROP EVENT TRIGGER [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropeventtrigger.html

Команда:     DROP EXTENSION
Описание:    удалить расширение
Синтаксис:
DROP EXTENSION [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropextension.html

Команда:     DROP FOREIGN DATA WRAPPER
Описание:    удалить обёртку сторонних данных
Синтаксис:
DROP FOREIGN DATA WRAPPER [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropforeigndatawrapper.html

Команда:     DROP FOREIGN TABLE
Описание:    удалить стороннюю таблицу
Синтаксис:
DROP FOREIGN TABLE [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropforeigntable.html

Команда:     DROP FUNCTION
Описание:    удалить функцию
Синтаксис:
DROP FUNCTION [ IF EXISTS ] имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] [, ...]
    [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropfunction.html

Команда:     DROP GROUP
Описание:    удалить роль пользователя БД
Синтаксис:
DROP GROUP [ IF EXISTS ] имя [, ...]

URL: https://www.postgresql.org/docs/15/sql-dropgroup.html

Команда:     DROP INDEX
Описание:    удалить индекс
Синтаксис:
DROP INDEX [ CONCURRENTLY ] [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropindex.html

Команда:     DROP LANGUAGE
Описание:    удалить процедурный язык
Синтаксис:
DROP [ PROCEDURAL ] LANGUAGE [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droplanguage.html

Команда:     DROP MATERIALIZED VIEW
Описание:    удалить материализованное представление
Синтаксис:
DROP MATERIALIZED VIEW [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropmaterializedview.html

Команда:     DROP OPERATOR
Описание:    удалить оператор
Синтаксис:
DROP OPERATOR [ IF EXISTS ] имя ( { тип_слева | NONE } , тип_справа ) [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropoperator.html

Команда:     DROP OPERATOR CLASS
Описание:    удалить класс операторов
Синтаксис:
DROP OPERATOR CLASS [ IF EXISTS ] имя USING метод_индекса [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropopclass.html

Команда:     DROP OPERATOR FAMILY
Описание:    удалить семейство операторов
Синтаксис:
DROP OPERATOR FAMILY [ IF EXISTS ] имя USING метод_индекса [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropopfamily.html

Команда:     DROP OWNED
Описание:    удалить объекты базы данных, принадлежащие роли
Синтаксис:
DROP OWNED BY { имя | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-drop-owned.html

Команда:     DROP POLICY
Описание:    удалить из таблицы политику защиты на уровне строк
Синтаксис:
DROP POLICY [ IF EXISTS ] имя ON имя_таблицы [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droppolicy.html

Команда:     DROP PROCEDURE
Описание:    удалить процедуру
Синтаксис:
DROP PROCEDURE [ IF EXISTS ] имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] [, ...]
    [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropprocedure.html

Команда:     DROP PUBLICATION
Описание:    удалить публикацию
Синтаксис:
DROP PUBLICATION [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droppublication.html

Команда:     DROP ROLE
Описание:    удалить роль пользователя БД
Синтаксис:
DROP ROLE [ IF EXISTS ] имя [, ...]

URL: https://www.postgresql.org/docs/15/sql-droprole.html

Команда:     DROP ROUTINE
Описание:    удалить подпрограмму
Синтаксис:
DROP ROUTINE [ IF EXISTS ] имя [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] [, ...]
    [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droproutine.html

Команда:     DROP RULE
Описание:    удалить правило перезаписи
Синтаксис:
DROP RULE [ IF EXISTS ] имя ON имя_таблицы [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droprule.html

Команда:     DROP SCHEMA
Описание:    удалить схему
Синтаксис:
DROP SCHEMA [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropschema.html

Команда:     DROP SEQUENCE
Описание:    удалить последовательность
Синтаксис:
DROP SEQUENCE [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropsequence.html

Команда:     DROP SERVER
Описание:    удалить описание стороннего сервера
Синтаксис:
DROP SERVER [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropserver.html

Команда:     DROP STATISTICS
Описание:    удалить расширенную статистику
Синтаксис:
DROP STATISTICS [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropstatistics.html

Команда:     DROP SUBSCRIPTION
Описание:    удалить подписку
Синтаксис:
DROP SUBSCRIPTION [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropsubscription.html

Команда:     DROP TABLE
Описание:    удалить таблицу
Синтаксис:
DROP TABLE [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptable.html

Команда:     DROP TABLESPACE
Описание:    удалить табличное пространство
Синтаксис:
DROP TABLESPACE [ IF EXISTS ] имя

URL: https://www.postgresql.org/docs/15/sql-droptablespace.html

Команда:     DROP TEXT SEARCH CONFIGURATION
Описание:    удалить конфигурацию текстового поиска
Синтаксис:
DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptsconfig.html

Команда:     DROP TEXT SEARCH DICTIONARY
Описание:    удалить словарь текстового поиска
Синтаксис:
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptsdictionary.html

Команда:     DROP TEXT SEARCH PARSER
Описание:    удалить анализатор текстового поиска
Синтаксис:
DROP TEXT SEARCH PARSER [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptsparser.html

Команда:     DROP TEXT SEARCH TEMPLATE
Описание:    удалить шаблон текстового поиска
Синтаксис:
DROP TEXT SEARCH TEMPLATE [ IF EXISTS ] имя [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptstemplate.html

Команда:     DROP TRANSFORM
Описание:    удалить преобразование
Синтаксис:
DROP TRANSFORM [ IF EXISTS ] FOR имя_типа LANGUAGE имя_языка [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptransform.html

Команда:     DROP TRIGGER
Описание:    удалить триггер
Синтаксис:
DROP TRIGGER [ IF EXISTS ] имя ON имя_таблицы [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptrigger.html

Команда:     DROP TYPE
Описание:    удалить тип данных
Синтаксис:
DROP TYPE [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-droptype.html

Команда:     DROP USER
Описание:    удалить роль пользователя БД
Синтаксис:
DROP USER [ IF EXISTS ] имя [, ...]

URL: https://www.postgresql.org/docs/15/sql-dropuser.html

Команда:     DROP USER MAPPING
Описание:    удалить сопоставление пользователя для стороннего сервера
Синтаксис:
DROP USER MAPPING [ IF EXISTS ] FOR { имя_пользователя | USER | CURRENT_ROLE | CURRENT_USER | PUBLIC } SERVER имя_сервера

URL: https://www.postgresql.org/docs/15/sql-dropusermapping.html

Команда:     DROP VIEW
Описание:    удалить представление
Синтаксис:
DROP VIEW [ IF EXISTS ] имя [, ...] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-dropview.html

Команда:     END
Описание:    зафиксировать текущую транзакцию
Синтаксис:
END [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

URL: https://www.postgresql.org/docs/15/sql-end.html

Команда:     EXECUTE
Описание:    выполнить подготовленный оператор
Синтаксис:
EXECUTE имя [ ( параметр [, ...] ) ]

URL: https://www.postgresql.org/docs/15/sql-execute.html

Команда:     EXPLAIN
Описание:    показать план выполнения оператора
Синтаксис:
EXPLAIN [ ( параметр [, ...] ) ] оператор
EXPLAIN [ ANALYZE ] [ VERBOSE ] оператор

где допустимый параметр:

    ANALYZE [ логическое_значение ]
    VERBOSE [ логическое_значение ]
    COSTS [ логическое_значение ]
    SETTINGS [ логическое_значение ]
    BUFFERS [ логическое_значение ]
    WAL [ логическое_значение ]
    TIMING [ логическое_значение ]
    SUMMARY [ логическое_значение ]
    FORMAT { TEXT | XML | JSON | YAML }

URL: https://www.postgresql.org/docs/15/sql-explain.html

Команда:     FETCH
Описание:    получить результат запроса через курсор
Синтаксис:
FETCH [ направление ] [ FROM | IN ] имя_курсора

где допустимое направление:

    NEXT
    PRIOR
    FIRST
    LAST
    ABSOLUTE число
    RELATIVE число
    число
    ALL
    FORWARD
    FORWARD число
    FORWARD ALL
    BACKWARD
    BACKWARD число
    BACKWARD ALL

URL: https://www.postgresql.org/docs/15/sql-fetch.html

Команда:     GRANT
Описание:    определить права доступа
Синтаксис:
GRANT { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] имя_таблицы [, ...]
         | ALL TABLES IN SCHEMA имя_схемы [, ...] }
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { SELECT | INSERT | UPDATE | REFERENCES } ( имя_столбца [, ...] )
    [, ...] | ALL [ PRIVILEGES ] ( имя_столбца [, ...] ) }
    ON [ TABLE ] имя_таблицы [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { SEQUENCE имя_последовательности [, ...]
         | ALL SEQUENCES IN SCHEMA имя_схемы [, ...] }
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { CREATE | CONNECT | TEMPORARY | TEMP } [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE имя_БД [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN имя_домена [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER имя_обёртки_сторонних_данных [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER имя_сервера [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { EXECUTE | ALL [ PRIVILEGES ] }
    ON { { FUNCTION | PROCEDURE | ROUTINE } имя_подпрограммы [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] [, ...]
         | ALL { FUNCTIONS | PROCEDURES | ROUTINES } IN SCHEMA имя_схемы [, ...] }
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE имя_языка [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT код_БО [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { SET | ALTER SYSTEM } [, ... ] | ALL [ PRIVILEGES ] }
    ON PARAMETER параметр_конфигурации [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA имя_схемы [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { CREATE | ALL [ PRIVILEGES ] }
    ON TABLESPACE табл_пространство [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT { USAGE | ALL [ PRIVILEGES ] }
    ON TYPE имя_типа [, ...]
    TO указание_роли [, ...] [ WITH GRANT OPTION ]
    [ GRANTED BY указание_роли ]

GRANT имя_роли [, ...] TO указание_роли [, ...]
    [ WITH ADMIN OPTION ]
    [ GRANTED BY указание_роли ]

где допустимое указание_роли:

    [ GROUP ] имя_роли
  | PUBLIC
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

URL: https://www.postgresql.org/docs/15/sql-grant.html

Команда:     IMPORT FOREIGN SCHEMA
Описание:    импортировать определения таблиц со стороннего сервера
Синтаксис:
IMPORT FOREIGN SCHEMA удалённая_схема
    [ { LIMIT TO | EXCEPT } ( имя_таблицы [, ...] ) ]
    FROM SERVER имя_сервера
    INTO локальная_схема
    [ OPTIONS ( параметр 'значение' [, ... ] ) ]

URL: https://www.postgresql.org/docs/15/sql-importforeignschema.html

Команда:     INSERT
Описание:    добавить строки в таблицу
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
INSERT INTO имя_таблицы [ AS псевдоним ] [ ( имя_столбца [, ...] ) ]
    [ OVERRIDING { SYSTEM | USER } VALUE ]
    { DEFAULT VALUES | VALUES ( { выражение | DEFAULT } [, ...] ) [, ...] | запрос }
    [ ON CONFLICT [ объект_конфликта ] действие_при_конфликте ]
    [ RETURNING * | выражение_результата [ [ AS ] имя_результата ] [, ...] ]

где допустимый объект_конфликта:

    ( { имя_столбца_индекса | ( выражение_индекса ) } [ COLLATE правило_сортировки ] [ класс_оператора ] [, ...] ) [ WHERE предикат_индекса ]
    ON CONSTRAINT имя_ограничения

а допустимое действие_при_конфликте:

    DO NOTHING
    DO UPDATE SET { имя_столбца = { выражение | DEFAULT } |
                    ( имя_столбца [, ...] ) = [ ROW ] ( { выражение | DEFAULT } [, ...] ) |
                    ( имя_столбца [, ...] ) = ( вложенный_SELECT )
                  } [, ...]
              [ WHERE условие ]

URL: https://www.postgresql.org/docs/15/sql-insert.html

Команда:     LISTEN
Описание:    ожидать уведомления
Синтаксис:
LISTEN канал

URL: https://www.postgresql.org/docs/15/sql-listen.html

Команда:     LOAD
Описание:    загрузить файл разделяемой библиотеки
Синтаксис:
LOAD 'имя_файла'

URL: https://www.postgresql.org/docs/15/sql-load.html

Команда:     LOCK
Описание:    заблокировать таблицу
Синтаксис:
LOCK [ TABLE ] [ ONLY ] имя [ * ] [, ...] [ IN режим_блокировки MODE ] [ NOWAIT ]

где допустимый режим_блокировки:

    ACCESS SHARE | ROW SHARE | ROW EXCLUSIVE | SHARE UPDATE EXCLUSIVE
    | SHARE | SHARE ROW EXCLUSIVE | EXCLUSIVE | ACCESS EXCLUSIVE

URL: https://www.postgresql.org/docs/15/sql-lock.html

Команда:     MERGE
Описание:    добавление, изменение или удаление строк таблицы по условию
Синтаксис:
[ WITH запрос_WITH [, ...] ]
MERGE INTO [ ONLY ] имя_целевой_таблицы [ * ] [ [ AS ] псевдоним_назначения ]
USING источник_данных ON условие_соединения
предложение_when [...]

где источник_данных:

{ [ ONLY ] имя_исходной_таблицы [ * ] | ( исходный_запрос ) } [ [ AS ] псевдоним_источника ]

и предложение_when:

{ WHEN MATCHED [ AND условие ] THEN { merge_update | merge_delete | DO NOTHING } |
  WHEN NOT MATCHED [ AND условие ] THEN { merge_insert | DO NOTHING } }

и merge_insert:

INSERT [( имя_столбца [, ...] )]
[ OVERRIDING { SYSTEM | USER } VALUE ]
{ VALUES ( { выражение | DEFAULT } [, ...] ) | DEFAULT VALUES }

и merge_update:

UPDATE SET { имя_столбца = { выражение | DEFAULT } |
             ( имя_столбца [, ...] ) = ( { выражение | DEFAULT } [, ...] ) } [, ...]

и merge_delete:

DELETE

URL: https://www.postgresql.org/docs/15/sql-merge.html

Команда:     MOVE
Описание:    установить курсор
Синтаксис:
MOVE [ направление ] [ FROM | IN ] имя_курсора

где допустимое направление:

    NEXT
    PRIOR
    FIRST
    LAST
    ABSOLUTE число
    RELATIVE число
    число
    ALL
    FORWARD
    FORWARD число
    FORWARD ALL
    BACKWARD
    BACKWARD число
    BACKWARD ALL

URL: https://www.postgresql.org/docs/15/sql-move.html

Команда:     NOTIFY
Описание:    сгенерировать уведомление
Синтаксис:
NOTIFY канал [ , сообщение_нагрузка ]

URL: https://www.postgresql.org/docs/15/sql-notify.html

Команда:     PREPARE
Описание:    подготовить оператор для выполнения
Синтаксис:
PREPARE имя [ ( тип_данных [, ...] ) ] AS оператор

URL: https://www.postgresql.org/docs/15/sql-prepare.html

Команда:     PREPARE TRANSACTION
Описание:    подготовить текущую транзакцию для двухфазной фиксации
Синтаксис:
PREPARE TRANSACTION код_транзакции

URL: https://www.postgresql.org/docs/15/sql-prepare-transaction.html

Команда:     REASSIGN OWNED
Описание:    изменить владельца объектов БД, принадлежащих заданной роли
Синтаксис:
REASSIGN OWNED BY { старая_роль | CURRENT_ROLE | CURRENT_USER | SESSION_USER } [, ...]
               TO { новая_роль | CURRENT_ROLE | CURRENT_USER | SESSION_USER }

URL: https://www.postgresql.org/docs/15/sql-reassign-owned.html

Команда:     REFRESH MATERIALIZED VIEW
Описание:    заменить содержимое материализованного представления
Синтаксис:
REFRESH MATERIALIZED VIEW [ CONCURRENTLY ] имя
    [ WITH [ NO ] DATA ]

URL: https://www.postgresql.org/docs/15/sql-refreshmaterializedview.html

Команда:     REINDEX
Описание:    перестроить индексы
Синтаксис:
REINDEX [ ( параметр [, ...] ) ] { INDEX | TABLE | SCHEMA | DATABASE | SYSTEM } [ CONCURRENTLY ] имя

где допустимый параметр:

    CONCURRENTLY [ логическое_значение ]
    TABLESPACE новое_табл_пространство
    VERBOSE [ логическое_значение ]

URL: https://www.postgresql.org/docs/15/sql-reindex.html

Команда:     RELEASE SAVEPOINT
Описание:    удалить ранее определённую точку сохранения
Синтаксис:
RELEASE [ SAVEPOINT ] имя_точки_сохранения

URL: https://www.postgresql.org/docs/15/sql-release-savepoint.html

Команда:     RESET
Описание:    восстановить исходное значение параметра выполнения
Синтаксис:
RESET параметр_конфигурации
RESET ALL

URL: https://www.postgresql.org/docs/15/sql-reset.html

Команда:     REVOKE
Описание:    удалить права доступа
Синтаксис:
REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | DELETE | TRUNCATE | REFERENCES | TRIGGER }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { [ TABLE ] имя_таблицы [, ...]
         | ALL TABLES IN SCHEMA имя_схемы [, ...] }
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SELECT | INSERT | UPDATE | REFERENCES } ( имя_столбца [, ...] )
    [, ...] | ALL [ PRIVILEGES ] ( имя_столбца [, ...] ) }
    ON [ TABLE ] имя_таблицы [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { USAGE | SELECT | UPDATE }
    [, ...] | ALL [ PRIVILEGES ] }
    ON { SEQUENCE имя_последовательности [, ...]
         | ALL SEQUENCES IN SCHEMA имя_схемы [, ...] }
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { CREATE | CONNECT | TEMPORARY | TEMP } [, ...] | ALL [ PRIVILEGES ] }
    ON DATABASE имя_БД [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON DOMAIN имя_домена [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN DATA WRAPPER имя_обёртки_сторонних_данных [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON FOREIGN SERVER имя_сервера [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { EXECUTE | ALL [ PRIVILEGES ] }
    ON { { FUNCTION | PROCEDURE | ROUTINE } имя_функции [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] [, ...]
         | ALL { FUNCTIONS | PROCEDURES | ROUTINES } IN SCHEMA имя_схемы [, ...] }
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON LANGUAGE имя_языка [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SELECT | UPDATE } [, ...] | ALL [ PRIVILEGES ] }
    ON LARGE OBJECT код_БО [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { SET | ALTER SYSTEM } [, ...] | ALL [ PRIVILEGES ] }
    ON PARAMETER параметр_конфигурации [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { { CREATE | USAGE } [, ...] | ALL [ PRIVILEGES ] }
    ON SCHEMA имя_схемы [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { CREATE | ALL [ PRIVILEGES ] }
    ON TABLESPACE табл_пространство [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ GRANT OPTION FOR ]
    { USAGE | ALL [ PRIVILEGES ] }
    ON TYPE имя_типа [, ...]
    FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

REVOKE [ ADMIN OPTION FOR ]
    имя_роли [, ...] FROM указание_роли [, ...]
    [ GRANTED BY указание_роли ]
    [ CASCADE | RESTRICT ]

где допустимое указание_роли:

    [ GROUP ] имя_роли
  | PUBLIC
  | CURRENT_ROLE
  | CURRENT_USER
  | SESSION_USER

URL: https://www.postgresql.org/docs/15/sql-revoke.html

Команда:     ROLLBACK
Описание:    прервать текущую транзакцию
Синтаксис:
ROLLBACK [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

URL: https://www.postgresql.org/docs/15/sql-rollback.html

Команда:     ROLLBACK PREPARED
Описание:    отменить транзакцию, подготовленную ранее для двухфазной фиксации
Синтаксис:
ROLLBACK PREPARED код_транзакции

URL: https://www.postgresql.org/docs/15/sql-rollback-prepared.html

Команда:     ROLLBACK TO SAVEPOINT
Описание:    откатиться к точке сохранения
Синтаксис:
ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] имя_точки_сохранения

URL: https://www.postgresql.org/docs/15/sql-rollback-to.html

Команда:     SAVEPOINT
Описание:    определить новую точку сохранения в текущей транзакции
Синтаксис:
SAVEPOINT имя_точки_сохранения

URL: https://www.postgresql.org/docs/15/sql-savepoint.html

Команда:     SECURITY LABEL
Описание:    задать или изменить метку безопасности, применённую к объекту
Синтаксис:
SECURITY LABEL [ FOR провайдер ] ON
{
  TABLE имя_объекта |
  COLUMN имя_таблицы.имя_столбца |
  AGGREGATE имя_агр_функции ( сигнатура_агр_функции ) |
  DATABASE имя_объекта |
  DOMAIN имя_объекта |
  EVENT TRIGGER имя_объекта |
  FOREIGN TABLE имя_объекта
  FUNCTION имя_функции [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  LARGE OBJECT oid_большого_объекта |
  MATERIALIZED VIEW имя_объекта |
  [ PROCEDURAL ] LANGUAGE имя_объекта |
  PROCEDURE имя_процедуры [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  PUBLICATION имя_объекта |
  ROLE имя_объекта |
  ROUTINE имя_подпрограммы [ ( [ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [, ...] ] ) ] |
  SCHEMA имя_объекта |
  SEQUENCE имя_объекта |
  SUBSCRIPTION имя_объекта |
  TABLESPACE имя_объекта |
  TYPE имя_объекта |
  VIEW имя_объекта
} IS { строковая_константа | NULL }

где сигнатура_агр_функции:

* |
[ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] |
[ [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ] ] ORDER BY [ режим_аргумента ] [ имя_аргумента ] тип_аргумента [ , ... ]

URL: https://www.postgresql.org/docs/15/sql-security-label.html

Команда:     SELECT
Описание:    выбрать строки из таблицы или представления
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( выражение [, ...] ) ] ]
    [ * | выражение [ [ AS ] имя_результата ] [, ...] ]
    [ FROM источник_данных [, ...] ]
    [ WHERE условие ]
    [ GROUP BY [ ALL | DISTINCT ] элемент_группирования [, ...] ]
    [ HAVING условие ]
    [ WINDOW имя_окна AS ( определение_окна ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY выражение [ ASC | DESC | USING оператор ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { число | ALL } ]
    [ OFFSET начальное_значение [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ число ] { ROW | ROWS } { ONLY | WITH TIES } ]
    [ FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF имя_таблицы [, ...] ] [ NOWAIT | SKIP LOCKED ] [...] ]

где допустимый источник_данных:

    [ ONLY ] имя_таблицы [ * ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
                [ TABLESAMPLE метод_выборки ( аргумент [, ...] ) [ REPEATABLE ( начальное_число ) ] ]
    [ LATERAL ] ( select ) [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ]
    имя_запроса_WITH [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) [ AS ] псевдоним ( определение_столбца [, ...] )
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) AS ( определение_столбца [, ...] )
    [ LATERAL ] ROWS FROM( имя_функции ( [ аргумент [, ...] ] ) [ AS ( определение_столбца [, ...] ) ] [, ...] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    источник_данных тип_соединения источник_данных { ON условие_соединения | USING ( столбец_соединения [, ...] ) [ AS псевдоним_использования_соединения ] }
    источник_данных NATURAL тип_соединения источник_данных
    источник_данных CROSS JOIN источник_данных

где допустимый элемент_группирования:

    ( )
    выражение
    ( выражение [, ...] )
    ROLLUP ( { выражение | ( выражение [, ...] ) } [, ...] )
    CUBE ( { выражение | ( выражение [, ...] ) } [, ...] )
    GROUPING SETS ( элемент_группирования [, ...] )

и запрос_WITH:

    имя_запроса_WITH [ ( имя_столбца [, ...] ) ] AS [ [ NOT ] MATERIALIZED ] ( select | значения | insert | update | delete )
        [ SEARCH { BREADTH | DEPTH } FIRST BY имя_столбца [, ...] SET имя_столбца_послед_поиска ]
        [ CYCLE имя_столбца [, ...] SET имя_столбца_пометки_цикла [ TO значение_пометки_цикла DEFAULT пометка_цикла_по_умолчанию ] USING имя_столбца_пути_цикла ]

TABLE [ ONLY ] имя_таблицы [ * ]

URL: https://www.postgresql.org/docs/15/sql-select.html

Команда:     SELECT INTO
Описание:    создать таблицу из результатов запроса
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( выражение [, ...] ) ] ]
    * | выражение [ [ AS ] имя_результата ] [, ...]
    INTO [ TEMPORARY | TEMP | UNLOGGED ] [ TABLE ] новая_таблица
    [ FROM источник_данных [, ...] ]
    [ WHERE условие ]
    [ GROUP BY выражение [, ...] ]
    [ HAVING условие ]
    [ WINDOW имя_окна AS ( определение_окна ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY выражение [ ASC | DESC | USING оператор ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { число | ALL } ]
    [ OFFSET начальное_значение [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ число ] { ROW | ROWS } ONLY ]
    [ FOR { UPDATE | SHARE } [ OF имя_таблицы [, ...] ] [ NOWAIT ] [...] ]

URL: https://www.postgresql.org/docs/15/sql-selectinto.html

Команда:     SET
Описание:    изменить параметр выполнения
Синтаксис:
SET [ SESSION | LOCAL ] параметр_конфигурации { TO | = } { значение | 'значение' | DEFAULT }
SET [ SESSION | LOCAL ] TIME ZONE { значение | 'значение' | LOCAL | DEFAULT }

URL: https://www.postgresql.org/docs/15/sql-set.html

Команда:     SET CONSTRAINTS
Описание:    установить время проверки ограничений для текущей транзакции
Синтаксис:
SET CONSTRAINTS { ALL | имя [, ...] } { DEFERRED | IMMEDIATE }

URL: https://www.postgresql.org/docs/15/sql-set-constraints.html

Команда:     SET ROLE
Описание:    задать идентификатор текущего пользователя в текущем сеансе
Синтаксис:
SET [ SESSION | LOCAL ] ROLE имя_роли
SET [ SESSION | LOCAL ] ROLE NONE
RESET ROLE

URL: https://www.postgresql.org/docs/15/sql-set-role.html

Команда:     SET SESSION AUTHORIZATION
Описание:    задать идентификатор пользователя сеанса и идентификатор текущего пользователя в текущем сеансе
Синтаксис:
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION имя_пользователя
SET [ SESSION | LOCAL ] SESSION AUTHORIZATION DEFAULT
RESET SESSION AUTHORIZATION

URL: https://www.postgresql.org/docs/15/sql-set-session-authorization.html

Команда:     SET TRANSACTION
Описание:    задать свойства текущей транзакции
Синтаксис:
SET TRANSACTION режим_транзакции [, ...]
SET TRANSACTION SNAPSHOT код_снимка
SET SESSION CHARACTERISTICS AS TRANSACTION режим_транзакции [, ...]

где допустимый режим_транзакции:

    ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
    READ WRITE | READ ONLY
    [ NOT ] DEFERRABLE

URL: https://www.postgresql.org/docs/15/sql-set-transaction.html

Команда:     SHOW
Описание:    показать значение параметра выполнения
Синтаксис:
SHOW имя
SHOW ALL

URL: https://www.postgresql.org/docs/15/sql-show.html

Команда:     START TRANSACTION
Описание:    начать транзакцию
Синтаксис:
START TRANSACTION [ режим_транзакции [, ...] ]

где допустимый режим_транзакции:

    ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
    READ WRITE | READ ONLY
    [ NOT ] DEFERRABLE

URL: https://www.postgresql.org/docs/15/sql-start-transaction.html

Команда:     TABLE
Описание:    выбрать строки из таблицы или представления
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( выражение [, ...] ) ] ]
    [ * | выражение [ [ AS ] имя_результата ] [, ...] ]
    [ FROM источник_данных [, ...] ]
    [ WHERE условие ]
    [ GROUP BY [ ALL | DISTINCT ] элемент_группирования [, ...] ]
    [ HAVING условие ]
    [ WINDOW имя_окна AS ( определение_окна ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY выражение [ ASC | DESC | USING оператор ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { число | ALL } ]
    [ OFFSET начальное_значение [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ число ] { ROW | ROWS } { ONLY | WITH TIES } ]
    [ FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF имя_таблицы [, ...] ] [ NOWAIT | SKIP LOCKED ] [...] ]

где допустимый источник_данных:

    [ ONLY ] имя_таблицы [ * ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
                [ TABLESAMPLE метод_выборки ( аргумент [, ...] ) [ REPEATABLE ( начальное_число ) ] ]
    [ LATERAL ] ( select ) [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ]
    имя_запроса_WITH [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) [ AS ] псевдоним ( определение_столбца [, ...] )
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) AS ( определение_столбца [, ...] )
    [ LATERAL ] ROWS FROM( имя_функции ( [ аргумент [, ...] ] ) [ AS ( определение_столбца [, ...] ) ] [, ...] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    источник_данных тип_соединения источник_данных { ON условие_соединения | USING ( столбец_соединения [, ...] ) [ AS псевдоним_использования_соединения ] }
    источник_данных NATURAL тип_соединения источник_данных
    источник_данных CROSS JOIN источник_данных

где допустимый элемент_группирования:

    ( )
    выражение
    ( выражение [, ...] )
    ROLLUP ( { выражение | ( выражение [, ...] ) } [, ...] )
    CUBE ( { выражение | ( выражение [, ...] ) } [, ...] )
    GROUPING SETS ( элемент_группирования [, ...] )

и запрос_WITH:

    имя_запроса_WITH [ ( имя_столбца [, ...] ) ] AS [ [ NOT ] MATERIALIZED ] ( select | значения | insert | update | delete )
        [ SEARCH { BREADTH | DEPTH } FIRST BY имя_столбца [, ...] SET имя_столбца_послед_поиска ]
        [ CYCLE имя_столбца [, ...] SET имя_столбца_пометки_цикла [ TO значение_пометки_цикла DEFAULT пометка_цикла_по_умолчанию ] USING имя_столбца_пути_цикла ]

TABLE [ ONLY ] имя_таблицы [ * ]

URL: https://www.postgresql.org/docs/15/sql-select.html

Команда:     TRUNCATE
Описание:    опустошить таблицу или набор таблиц
Синтаксис:
TRUNCATE [ TABLE ] [ ONLY ] имя [ * ] [, ... ]
    [ RESTART IDENTITY | CONTINUE IDENTITY ] [ CASCADE | RESTRICT ]

URL: https://www.postgresql.org/docs/15/sql-truncate.html

Команда:     UNLISTEN
Описание:    прекратить ожидание уведомлений
Синтаксис:
UNLISTEN { канал | * }

URL: https://www.postgresql.org/docs/15/sql-unlisten.html

Команда:     UPDATE
Описание:    изменить строки таблицы
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
UPDATE [ ONLY ] имя_таблицы [ * ] [ [ AS ] псевдоним ]
    SET { имя_столбца = { выражение | DEFAULT } |
          ( имя_столбца [, ...] ) = [ ROW ] ( { выражение | DEFAULT } [, ...] ) |
          ( имя_столбца [, ...] ) = ( вложенный_SELECT )
        } [, ...]
    [ FROM источник_данных [, ...] ]
    [ WHERE условие | WHERE CURRENT OF имя_курсора ]
    [ RETURNING * | выражение_результата [ [ AS ] имя_результата ] [, ...] ]

URL: https://www.postgresql.org/docs/15/sql-update.html

Команда:     VACUUM
Описание:    произвести сборку мусора и проанализировать базу данных
Синтаксис:
VACUUM [ ( параметр [, ...] ) ] [ таблица_и_столбцы [, ...] ]
VACUUM [ FULL ] [ FREEZE ] [ VERBOSE ] [ ANALYZE ] [ таблица_и_столбцы [, ...] ]

где допустимый параметр:

    FULL [ логическое_значение ]
    FREEZE [ логическое_значение ]
    VERBOSE [ логическое_значение ]
    ANALYZE [ логическое_значение ]
    DISABLE_PAGE_SKIPPING [ логическое_значение ]
    SKIP_LOCKED [ логическое_значение ]
    INDEX_CLEANUP { AUTO | ON | OFF }
    PROCESS_TOAST [ логическое_значение ]
    TRUNCATE [ логическое_значение ]
    PARALLEL целое

и таблица_и_столбцы:

    имя_таблицы [ ( имя_столбца [, ...] ) ]

URL: https://www.postgresql.org/docs/15/sql-vacuum.html

Команда:     VALUES
Описание:    получить набор строк
Синтаксис:
VALUES ( выражение [, ...] ) [, ...]
    [ ORDER BY выражение_сортировки [ ASC | DESC | USING оператор ] [, ...] ]
    [ LIMIT { число | ALL } ]
    [ OFFSET начальное_значение [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ число ] { ROW | ROWS } ONLY ]

URL: https://www.postgresql.org/docs/15/sql-values.html

Команда:     WITH
Описание:    выбрать строки из таблицы или представления
Синтаксис:
[ WITH [ RECURSIVE ] запрос_WITH [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( выражение [, ...] ) ] ]
    [ * | выражение [ [ AS ] имя_результата ] [, ...] ]
    [ FROM источник_данных [, ...] ]
    [ WHERE условие ]
    [ GROUP BY [ ALL | DISTINCT ] элемент_группирования [, ...] ]
    [ HAVING условие ]
    [ WINDOW имя_окна AS ( определение_окна ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY выражение [ ASC | DESC | USING оператор ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { число | ALL } ]
    [ OFFSET начальное_значение [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ число ] { ROW | ROWS } { ONLY | WITH TIES } ]
    [ FOR { UPDATE | NO KEY UPDATE | SHARE | KEY SHARE } [ OF имя_таблицы [, ...] ] [ NOWAIT | SKIP LOCKED ] [...] ]

где допустимый источник_данных:

    [ ONLY ] имя_таблицы [ * ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
                [ TABLESAMPLE метод_выборки ( аргумент [, ...] ) [ REPEATABLE ( начальное_число ) ] ]
    [ LATERAL ] ( select ) [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ]
    имя_запроса_WITH [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) [ AS ] псевдоним ( определение_столбца [, ...] )
    [ LATERAL ] имя_функции ( [ аргумент [, ...] ] ) AS ( определение_столбца [, ...] )
    [ LATERAL ] ROWS FROM( имя_функции ( [ аргумент [, ...] ] ) [ AS ( определение_столбца [, ...] ) ] [, ...] )
                [ WITH ORDINALITY ] [ [ AS ] псевдоним [ ( псевдоним_столбца [, ...] ) ] ]
    источник_данных тип_соединения источник_данных { ON условие_соединения | USING ( столбец_соединения [, ...] ) [ AS псевдоним_использования_соединения ] }
    источник_данных NATURAL тип_соединения источник_данных
    источник_данных CROSS JOIN источник_данных

где допустимый элемент_группирования:

    ( )
    выражение
    ( выражение [, ...] )
    ROLLUP ( { выражение | ( выражение [, ...] ) } [, ...] )
    CUBE ( { выражение | ( выражение [, ...] ) } [, ...] )
    GROUPING SETS ( элемент_группирования [, ...] )

и запрос_WITH:

    имя_запроса_WITH [ ( имя_столбца [, ...] ) ] AS [ [ NOT ] MATERIALIZED ] ( select | значения | insert | update | delete )
        [ SEARCH { BREADTH | DEPTH } FIRST BY имя_столбца [, ...] SET имя_столбца_послед_поиска ]
        [ CYCLE имя_столбца [, ...] SET имя_столбца_пометки_цикла [ TO значение_пометки_цикла DEFAULT пометка_цикла_по_умолчанию ] USING имя_столбца_пути_цикла ]

TABLE [ ONLY ] имя_таблицы [ * ]

URL: https://www.postgresql.org/docs/15/sql-select.html

