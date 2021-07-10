-- Select rows from a Table or View 'Matches' in schema 'dbo'
--select team_id from FavoriteTeams where username='mof'
--INSERT INTO dbo.Matches (match_id, match_date, match_hour, home_team, away_team, referee_id, stadium)
--VALUES ('14',CONVERT(date,'2021-06-06',23),convert(datetime,'2021-06-06 20:30:00',120), '85', '939', '2', 'Teddy')
--Delete rows from table 'TableName'
--DELETE FROM dbo.Matches
--WHERE 	match_id = '31'
SELECT * FROM dbo.Matches
GO