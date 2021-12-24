CREATE TABLE persons_offenses_state_20 (
     	 State VARCHAR(40) NOT NULL,	
	 Number_of_Particpating_Agencies VARCHAR(40) NOT NULL,
	 Population_Covered VARCHAR(40) NOT NULL,	
	 assault_offenses VARCHAR(40) NOT NULL,	
	 homicide_offenses VARCHAR(40) NOT NULL,
	 human_trafficking VARCHAR(40) NOT NULL,	
	 kidnapping_abduction VARCHAR(40) NOT NULL,	
	 sex_offenses VARCHAR(40) NOT NULL,
         PRIMARY KEY (State)
     
);

CREATE TABLE property_offenses_state_20 (
         State VARCHAR(40) NOT NULL,
	 Number_of_Particpating_Agencies VARCHAR(40) NOT NULL,
	 Population_Covered VARCHAR(40) NOT NULL,
         Arson VARCHAR(40) NOT NULL,
	 Bribery VARCHAR(40) NOT NULL,	
	 Burglary_Breaking_Entering VARCHAR(40) NOT NULL,
	 Counterfeiting_Forgery VARCHAR (40) NOT NULL,
	 Destruction_Damage_Vandalism VARCHAR(40) NOT NULL,
	 Embezzlement VARCHAR(40) NOT NULL,
	 Extortion_Blackmail VARCHAR(40) NOT NULL,	
	 Fraud_Offenses VARCHAR(40) NOT NULL,
	 Larceny_Theft_Offenses VARCHAR(40) NOT NULL,
	 Motor_Vehicle_Theft VARCHAR(40) NOT NULL,
	 Robbery VARCHAR(40) NOT NULL,
	 Stolen_Property_Offenses VARCHAR(40) NOT NULL,
         PRIMARY KEY (State)
    
);

CREATE TABLE society_offenses_state_20 (
     State VARCHAR(40) NOT NULL,
	 Number_of_Particpating_Agencies VARCHAR(40) NOT NULL,
	 Population_Covered VARCHAR(40) NOT NULL,
	 Animal_Cruelty VARCHAR(40) NOT NULL,
	 Drug_Narcotic_Offenses VARCHAR(40) NOT NULL,
	 Gambling_Offenses VARCHAR(40) NOT NULL,
	 Pornography_Obscene_Material VARCHAR(40) NOT NULL,
     Prostitution_Offenses VARCHAR(40) NOT NULL,
	 Weapon_Law_Violations VARCHAR(40) NOT NULL,
     PRIMARY KEY (State)
     );