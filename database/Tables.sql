CREATE TABLE User (
  UserID INT NOT NULL,
  UserName VARCHAR(100) NOT NULL UNIQUE,
  Email VARCHAR(100) NOT NULL UNIQUE,
  Password VARCHAR(100) NOT NULL,
  LastName VARCHAR(100) NOT NULL,
  FirstName VARCHAR(100) NOT NULL,
  PRIMARY KEY (UserID, UserName) -- Composite key
);

CREATE TABLE Boards (
  BoardID INT NOT NULL,
  UserID INT NOT NULL,
  Title VARCHAR(100) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (UserID) REFERENCES User(UserID),
  PRIMARY KEY (BoardID)
);

-- function table 
CREATE TABLE BoardMember (
  MemberID INT NOT NULL,
  BoardID INT NOT NULL,
  MemberName VARCHAR(100) NOT NULL,
  FOREIGN KEY (MemberName) REFERENCES User(UserName),
  FOREIGN KEY (BoardID) REFERENCES Boards(BoardID),
  PRIMARY KEY (MemberID)
);

CREATE TABLE Lists (
  ListID INT NOT NULL,
  BoardID INT NOT NULL,
  Title VARCHAR(100) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (BoardID) REFERENCES Boards(BoardID),
  PRIMARY KEY (ListID)
);


CREATE TABLE Cards (
  CardID INT NOT NULL,
  ListID INT NOT NULL,
  Title VARCHAR(100) NOT NULL UNIQUE,
  Description VARCHAR(255) NOT NULL,
  DueDate DATE NOT NULL,
  ReminderDate DATE NOT NULL,
  FOREIGN KEY (ListID) REFERENCES Lists(ListID),
  PRIMARY KEY (CardID)
);


CREATE TABLE Comments (
  CommentID INT NOT NULL,
  CardID INT NOT NULL,
  Comment VARCHAR(300) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (CardID) REFERENCES Cards(CardID),
  PRIMARY KEY (CommentID)
);


CREATE TABLE Checklists (
  ChecklistID INT NOT NULL,
  CardID INT NOT NULL,
  Title VARCHAR(100) NOT NULL UNIQUE, 
  IsChecked BOOLEAN NOT NULL,
  FOREIGN KEY (CardID) REFERENCES Cards(CardID),
  PRIMARY KEY (ChecklistID)
);
