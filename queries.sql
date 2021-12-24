select *

from property_offenses_state_20 prop_off
Inner Join persons_offenses_state_20 per_off on per_off.state = prop_off.state
 AND per_off.state = 'Illinois'
Inner Join society_offenses_state_20 soc_off on soc_off.state = per_off.state
 AND soc_off.state = 'Illinois'

where
prop_off.state = 'Illinois';