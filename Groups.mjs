const room = 236;
const groups = new Groups();

        
// Create a new group. add methods takes integer as a parameter. returns id of group
const groupId = groups.add(room);


// Add this pupil to this group
groups.addPupil(groupId, pupil);

// Remove this pupil from this group
groups.removePupil(groupId, pupil.id);

// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
groups.read(groupId);
{
  id: 'JEF5H43H'
  room: 237,
  pupils:[] // array of pupils.     
}

// It will return array of groups
groups.readAll() 