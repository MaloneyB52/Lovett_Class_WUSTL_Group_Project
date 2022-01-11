select
off_cat.state
,off_cat.offense_category
,cat_type.offense_type
,off_cat.volume

From offense_cat_state_2020 off_cat
inner join offense_cat_type_2020 cat_type on off_cat.offense_category = cat_type.offense_category

where 
off_cat.offense_category = 'Burglary/Breaking & Entering';



select
off_cat.state
,off_cat.offense_category
,cat_type.offense_type
,off_cat.volume

From offense_cat_state_2020 off_cat
inner join offense_cat_type_2020 cat_type on off_cat.offense_category = cat_type.offense_category

where 
off_cat.volume > '20000';