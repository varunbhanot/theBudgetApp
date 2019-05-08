CREATE TABLE cashflow (
  id int(11) NOT NULL AUTO_INCREMENT,
  type varchar(200) DEFAULT NULL,
  sub_type varchar(200) DEFAULT NULL,
  amount float DEFAULT NULL,
  memo varchar(400) DEFAULT NULL,
  entry_time datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;
