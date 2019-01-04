const staffUsers = [
    {
        userId: 3253564,
        hca34: 'joh7315',
        displayName: 'John Johanson',
        assignments: {
            locations: [
                {
                    locationAssignmentId: 346456475,
                    locationStaffSlotId: 42533452534,
                    locationStaffSlotDisplayName: 'Primary',
                    locationNameDisplayName: 'Room 500',
                },
            ],
            patients: [],
            teams: [],
        },
        userRole: {
            userRoleId: 3253542,
            userRoleTypeId: 2345243,
            userRoleDisplayName: 'RN',
        },
    },
]

const locationAssignments = [
    {
        locationId: 345245325,
        locationNameDisplayName: '222A',
        patient: {
            patientId: 456765475,
            firstName: 'Jane',
            lastName: 'Doe',
            locationId: 345245325,
        },
        locationType: {
            locationTypeId: 325453345,
            locationTypeDisplayName: 'Room',
        },
        parentLocation: {
            parentLocationId: 34525432,
            parentLocationName: '2A',
            locationType: {
                locationTypeId: 325453345,
                locationTypeDisplayName: 'Room',
            },
        },
        locationStaffSlots: [
            {
                locationStaffSlotId: 4353453352,
                locationStaffSlotDisplayName: 'Primary',
                assignedTo: null,
            },
            {
                locationStaffSlotId: 43245342,
                locationStaffSlotDisplayName: 'Secondary',
                assignedTo: {
                    locationAssignmentId: 32453425234,
                    user: {
                        userRoleId: 3253542,
                        userRoleTypeId: 2345243,
                        userRoleDisplayName: 'RN',
                        userId: 32543252,
                        displayName: 'Nurse Billy Bob',
                    },
                },
            },
            {
                locationStaffSlotId: 564365436463,
                locationStaffSlotDisplayName: 'Tech',
                assignedTo: null,
            },
        ],
    },
]

const patientAssignments = [
    {
        patientId: 43525252354,
        firstName: 'John',
        lastName: 'Bobbitt',
        location: {
            locationId: 2452345,
            locationTypeId: 321353245,
            locationTypeDisplayName: 'Room',
            locationNameDisplayName: 'Room 303',
            parentLocationId: 234523452345,
            parentLocationName: 'Wing A',
        },
        assignments: [
            {
                userId: 3253564,
                hca34: 'joh7315',
                displayName: 'John Johanson',
                userRole: {
                    userRoleId: 23452345,
                    userRoleTypeId: 32523452345,
                    userRoleDisplayName: 'Case Manager',
                },
            },
        ],
    },
]
