CREATE TABLE Offense_Cat_State_2020 (
     State VARCHAR(40) NOT NULL,	
	 Offense_Category VARCHAR(40) NOT NULL,
	 Volume INTEGER,	
	 PRIMARY KEY (Offense_Category)
     
);

CREATE TABLE Offense_Cat_Loc_2020 (
     Location VARCHAR(40) NOT NULL,	
	 Offense_Category VARCHAR(40) NOT NULL,
	 Volume INTEGER,	
	 PRIMARY KEY (Offense_Category)
    
);

CREATE TABLE State_Pop_Agencies_2020 (
     State VARCHAR(40) NOT NULL,	
	 Num_Part_Agencies INTEGER,
	 Population_Covered INTEGER,	
	 PRIMARY KEY (State),
);

CREATE TABLE Offense_Cat_Type_2020 (
     Offense_Category VARCHAR(40) NOT NULL,
	 Offense_Type VARCHAR(40) NOT NULL,	
	 PRIMARY KEY (Offense_Category)
     
);

CREATE TABLE Law_Enforcement_State_2020 (
     State VARCHAR(40) NOT NULL,	
	 Total_law_employees INTEGER,
	 male_officers INTEGER,	
	 female_officers INTEGER,	
	 male_civilians INTEGER,	
	 female_civilians INTEGER,	
	 Num_Agencies INTEGER,
	 Est_pop INTEGER,
	 PRIMARY KEY (State)
);


CREATE TABLE Law_Enforcement_State_City_2020 (
     State VARCHAR(40) NOT NULL,
	 City VARCHAR (60) NOT NULL,
	 Population INTEGER,
	 Total_law_employees INTEGER,	
	 Total_officers INTEGER,	
	 Total_civilians INTEGER,	
	 PRIMARY KEY (State)
);

CREATE TABLE Offense_Cat_Offender_Race_2020 (
     Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         White INTEGER,
	 Black_African_American INTEGER,
	 American_Indian_Alaska_Native INTEGER,
	 Asian INTEGER,
 	 Native_Hawaiian_Other_Pacific_Islander INTEGER,
	 Unknown_Race INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);

CREATE TABLE Offense_Cat_Offender_Sex_2020 (
         Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         Male INTEGER,
	 Female INTEGER,
	 Unknown_Sex INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);

CREATE TABLE Offense_Cat_Offender_AGe_2020 (
         Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         Adult INTEGER,
	 Juvenile INTEGER,
	 Unknown_Age INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);

CREATE TABLE Offense_Cat_Victim_Race_2020 (
         Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         White INTEGER,
	 Black_African_American INTEGER,
	 American_Indian_Alaska_Native INTEGER,
	 Asian INTEGER,
 	 Native_Hawaiian_Other_Pacific_Islander INTEGER,
	 Unknown_Race INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);

CREATE TABLE Offense_Cat_Victim_Sex_2020 (
         Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         Male INTEGER,
	 Female INTEGER,
	 Unknown_Sex INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);

CREATE TABLE Offense_Cat_Victim_AGe_2020 (
         Offense_Category VARCHAR(40) NOT NULL,
	 Total_Offenders INTEGER,
         Adult INTEGER,
	 Juvenile INTEGER,
	 Unknown_Age INTEGER,
	 PRIMARY KEY (Offense_Category)
	    
);