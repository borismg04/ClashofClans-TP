
interface ClansOfClan {
    items: Item[];
}

interface Item {
    tag:              string;
    name:             string;
    type:             string;
    location:         Location;
    badgeUrls:        BadgeUrls;
    clanLevel:        number;
    clanPoints:       number;
    clanVersusPoints: number;
    requiredTrophies: number;
    warFrequency:     string;
    warWinStreak:     number;
    warWins:          number;
    warTies:          number;
    warLosses:        number;
    isWarLogPublic:   boolean;
    warLeague:        WarLeague;
    members:          number;
    labels:           Label[];
}

interface BadgeUrls {
    small:  string;
    large:  string;
    medium: string;
}

interface Label {
    id:       number;
    name:     string;
    iconUrls: IconUrls;
}

interface IconUrls {
    small:  string;
    medium: string;
}

interface Location {
    id:          number;
    name:        string;
    isCountry:   boolean;
    countryCode: string;
}

interface WarLeague {
    id:   number;
    name: string;
}

interface ClansOfClan {
    items: Item[];
}

interface map {
    items: Item[];
}

export type {
    ClansOfClan,
    Item,
    BadgeUrls,
    Label,
    IconUrls,
    Location,
    WarLeague,
    map,
};




