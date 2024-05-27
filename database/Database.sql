INSERT INTO "public"."Users" (
    "FirstName",
    "LastName",
    "Username",
    "Email",
    "Password"
  )
VALUES(
    'Nguyen',
    'Hung',
    'Greekatz',
    'nguyenhung@gmail.com',
    'nguyenhung'
  ),
  --1--
  (
    'Vo',
    'An',
    'vogiaan1409',
    'voan@gmail.com',
    'voan'
  ),
  --2--
  (
    'Trinh',
    'Anh',
    'theanh0410',
    'trinhanh@gmail.com',
    'trinhanh'
  ),
  --3--
  (
    'Ha',
    'Tri',
    'tuilatri',
    'hatri@gmail.com',
    'hatri'
  ),
  --4--
  (
    'Pham',
    'Tri',
    'DucTri2401',
    'phamtri@gmail.com',
    'phamtri'
  ),
  --5--
  (
    'Do',
    'Viet',
    'VietHungDo',
    'doviet@gmail.com',
    'doviet'
  ),
  --6--
  (
    'Cao',
    'Thang',
    'tcq123-iu',
    'caothang@gmail.com',
    'caothang'
  );
--7--
INSERT INTO "public"."Boards"("Title", "CreatedAt", "UpdatedAt")
VALUES('Proposal', '2024-03-04', '2024-03-07'),
  --1--
  ('ERD', '2024-03-10', '2024-03-14'),
  --2--
  ('Backend', '2024-03-15', '2024-03-20'),
  --3--
  ('Frontend', '2024-03-20', '2024-03-31'),
  --4--
  ('Database', '2024-04-03', '2024-04-10'),
  --5--
  ('Design', '2024-04-10', '2024-04-19'),
  --6--
  ('Testing', '2024-04-20', '2024-04-25'),
  --7--
  ('Project', '2024-04-30', '2024-05-02'),
  --8--
  ('Report', '2024-03-04', '2024-05-30');
--9--
INSERT INTO "public"."Lists" ("Title", "CreatedAt", "UpdatedAt")
VALUES ('List 1', '2024-03-04', '2024-03-06'),
  --1--
  ('List 2', '2024-03-05', '2024-03-07'),
  --2--
  ('List 3', '2024-03-10', '2024-03-12'),
  --3--
  ('List 4', '2024-03-11', '2024-03-14'),
  --4--
  ('List 5', '2024-03-15', '2024-03-17'),
  --5--
  ('List 6', '2024-03-16', '2024-03-20'),
  --6--
  ('List 7', '2024-03-20', '2024-03-25'),
  --7--
  ('List 8', '2024-03-22', '2024-03-31'),
  --8--
  ('List 9', '2024-04-03', '2024-04-09'),
  --9--
  ('List 10', '2024-04-04', '2024-04-10'),
  ('List 11', '2024-04-10', '2024-04-12'),
  ('List 12', '2024-04-13', '2024-04-19'),
  ('List 13', '2024-04-20', '2024-04-25'),
  ('List 14', '2024-04-23', '2024-04-24'),
  ('List 15', '2024-04-30', '2024-05-01'),
  ('List 16', '2024-05-01', '2024-05-02'),
  ('List 17', '2024-03-04', '2024-04-10'),
  ('List 18', '2024-04-20', '2024-05-30'),
  ('To Do', now(), now()),
  --19--
  ('In Progress', now(), now()),
  --20--
  ('Done', now(), now());
--21--
INSERT INTO "public"."BoardMembers" ("BoardId", "MemberId")
VALUES (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (2, 1),
  (2, 4),
  (2, 5),
  (3, 1),
  (3, 3),
  (4, 2),
  (4, 4),
  (5, 3),
  (5, 5),
  (6, 1),
  (6, 4),
  (6, 6);
INSERT INTO "public"."BroadLists" ("BoardId", "ListId")
VALUES (1, 1),
  (1, 2),
  (2, 3),
  (2, 4),
  (3, 5),
  (3, 6),
  (4, 7),
  (4, 8),
  (5, 9),
  (5, 10),
  (6, 11),
  (6, 12),
  (7, 13),
  (7, 14),
  (8, 15),
  (8, 16),
  (9, 17),
  (9, 18),
  (1, 19),
  (2, 19),
  (3, 19),
  (4, 19),
  (5, 20),
  (6, 20),
  (7, 20),
  (8, 21),
  (9, 21);
INSERT INTO "public"."Cards" (
    "Title",
    "Description",
    "DueDate",
    "RemimderDate"
  )
VALUES(
    'Card 1',
    'Description of Card 1',
    '2024-03-06',
    '2024-03-05'
  ),
  (
    'Card 2',
    'Description of Card 2',
    '2024-03-20',
    '2024-03-19'
  ),
  (
    'Card 3',
    'Description of Card 3',
    '2024-03-31',
    '2024-03-28'
  ),
  (
    'Card 4',
    'Description of Card 4',
    '2024-04-10',
    '2024-04-01'
  ),
  (
    'Card 5',
    'Description of Card 5',
    '2024-04-19',
    '2024-03-19'
  );
INSERT INTO "public"."CardLists" ("CardId", "ListId")
VALUES(1, 1),
  (1, 2),
  (1, 3),
  (2, 4),
  (3, 4),
  (4, 4),
  (5, 5),
  (3, 5),
  (5, 6);
INSERT INTO "public"."Comments"("CardID", "Comment", "CreateAt", "UpdateAt")
VALUES(1, 'Comment 1 on card 1', '2024-03-04', NULL),
  (
    1,
    'Comment 2 on card 1',
    '2024-03-12',
    '2024-03-14'
  ),
  (
    1,
    'Comment 3 on card 1',
    '2024-03-15',
    '2024-03-20'
  ),
  (2, 'Comment 1 on card 2', '2024-03-30', Null),
  (
    2,
    'Comment 2 on card 2',
    '2024-03-31',
    '2024-02-01'
  ),
  (
    2,
    'Comment 3 on card 2',
    '2024-03-01',
    '2024-03-02'
  );
INSERT INTO "public"."CheckList" ("CardId", "Title", "IsChecked")
VALUES(1, 'BE', true),
  (2, 'FE', true),
  (3, 'Design', true),
  (4, 'Database', false),
  (5, 'Testing', false),