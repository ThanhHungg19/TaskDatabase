-- add sample database
INSERT INTO User (UserID, Firstname, Lastname, Email, Password)
VALUES (1, 'tan', ' quach', '123@gnail.com', '123'),
  (2, 'binh', 'ong', 'xaxa2gmail.com', '666'),
  (3, 'thanh', 'ton', 'evxbdxe@gmail.com', 'ccv');
insert into Boards (BoardID, Title, CreatedAt, UpdatedAt, CreatorID)
values (1, 'Project A', NOW(), NOW(), 1),
  (2, 'Project B', NOW(), NOW(), 2),
  (3, 'Project C', NOW(), NOW(), 3);
insert into Board_Member (BoardID, UserID)
values (1, 2),
  (1, 3),
  (2, 1),
  (3, 1),
  (3, 2);
insert into Lists (
    ListID,
    Order_lists,
    Title,
    CreatedAt,
    UpdatedAt,
    BoardID
  )
values (1, 1, 'To Do', NOW(), NOW(), 1),
  (2, 2, 'In Progress', NOW(), NOW(), 1),
  (3, 1, 'Backlog', NOW(), NOW(), 2),
  (4, 1, 'Tasks', NOW(), NOW(), 3),
  (5, 2, 'Completed', NOW(), NOW(), 3);
insert into Boards_Lists (BoardID, ListID)
values (1, 1),
  (1, 2),
  (2, 3),
  (3, 4),
  (3, 5);
insert into Cards (
    CardID,
    Title,
    Description,
    DueDate,
    RememberDate,
    ListID
  )
values (
    1,
    'Task 1',
    'Complete task 1',
    '2024-04-01',
    NULL,
    1
  ),
  (
    2,
    'Task 2',
    'Finish task 2',
    '2024-04-05',
    NULL,
    1
  ),
  (
    3,
    'Task 3',
    'Work on task 3',
    '2024-04-03',
    NULL,
    2
  ),
  (
    4,
    'Task 4',
    'Implement task 4',
    '2024-04-07',
    NULL,
    3
  ),
  (
    5,
    'Task 5',
    'Review task 5',
    '2024-04-10',
    NULL,
    3
  );
insert into Comments (CommentID, CreatedAt, UpdatedAt, CardID)
values (1, NOW(), NOW(), 1),
  (2, NOW(), NOW(), 1),
  (3, NOW(), NOW(), 2),
  (4, NOW(), NOW(), 3),
  (5, NOW(), NOW(), 4);
insert into Checklists (
    ChecklistID,
    Title,
    IsChecked,
    Order_table,
    CardID
  )
values (1, 'Checklist 1', FALSE, 1, 1),
  (2, 'Checklist 2', TRUE, 2, 1),
  (3, 'Checklist 3', FALSE, 1, 2),
  (4, 'Checklist 4', FALSE, 1, 3),
  (5, 'Checklist 5', TRUE, 2, 4);