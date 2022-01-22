select 
ab.state
,ab.offense_type
,sum (ab.volume)

from offense_cat_type_state ab

where ab.offense_type = 'Person'

group by
ab.state
,ab.offense_type
;

select 
ab.state
,ab.offense_type
,sum (ab.volume)

from offense_cat_type_state ab

where ab.offense_type = 'Property'

group by
ab.state
,ab.offense_type
;

select 
ab.state
,ab.offense_type
,sum (ab.volume)

from offense_cat_type_state ab

where ab.offense_type = 'Society'

group by
ab.state
,ab.offense_type
;
