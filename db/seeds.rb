Armor.create!([
  {name: "Ancient Helm", location: nil, cost: 2000},
  {name: "Ancient Cuirass", location: nil, cost: 2000},
  {name: "Ancient Greaves", location: nil, cost: 2000},
  {name: "Barbarian Helm", location: nil, cost: 2000},
  {name: "Barbarian Armor", location: nil, cost: 2000},
  {name: "Barbarian Leg Wraps", location: nil, cost: 2000},
  {name: "Climber's Bandana", location: nil, cost: nil},
  {name: "Climbing Gear", location: nil, cost: nil},
  {name: "Climbing Boots", location: nil, cost: nil},
  {name: "Dark Hood", location: nil, cost: nil},
  {name: "Dark Tunic", location: nil, cost: nil},
  {name: "Dark Trousers", location: nil, cost: nil},
  {name: "Desert Voe Headband", location: nil, cost: nil},
  {name: "Desert Voe Spaulder", location: nil, cost: nil},
  {name: "Desert Voe Trousers", location: nil, cost: nil},
  {name: "Flamebreaker Helm", location: nil, cost: nil},
  {name: "Flamebreaker Armor", location: nil, cost: nil},
  {name: "Flamebreaker Boots", location: nil, cost: nil},
  {name: "Gerudo Veil", location: nil, cost: nil},
  {name: "Gerudo Top", location: nil, cost: nil},
  {name: "Gerudo Sirwal", location: nil, cost: nil},
  {name: "Hylian Hood", location: nil, cost: nil},
  {name: "Hylian Tunic", location: nil, cost: nil},
  {name: "Hylian Trousers", location: nil, cost: nil},
  {name: "Radiant Mask", location: nil, cost: nil},
  {name: "Radiant Shirt", location: nil, cost: nil},
  {name: "Radiant Tights", location: nil, cost: nil},
  {name: "Stealth Mask", location: nil, cost: nil},
  {name: "Stealth Chest Guard", location: nil, cost: nil},
  {name: "Stealth Tights", location: nil, cost: nil},
  {name: "Snowquill Headdress", location: nil, cost: nil},
  {name: "Snowquill Tunic", location: nil, cost: nil},
  {name: "Snowquill Trousers", location: nil, cost: nil},
  {name: "Soldier's Helm", location: nil, cost: nil},
  {name: "Soldier's Armor", location: nil, cost: nil},
  {name: "Soldier's Greaves", location: nil, cost: nil},
  {name: "Zora Helm", location: nil, cost: nil},
  {name: "Zora Armor", location: nil, cost: nil},
  {name: "Zora Greaves", location: nil, cost: nil},
  {name: "Cap of the Wild", location: nil, cost: nil},
  {name: "Tunic of the Wild", location: nil, cost: nil},
  {name: "Trousers of the Wild", location: nil, cost: nil}
])
ArmorPiece.create!([
  {armor_id: 1, level: 1, player_id: 1},
  {armor_id: 2, level: 1, player_id: 1},
  {armor_id: 3, level: 1, player_id: 1},
  {armor_id: 6, level: 1, player_id: 1}
])
Item.create!([
  {name: "Ancient Screw"},
  {name: "Ancient Spring"},
  {name: "Ancient Gear"},
  {name: "Ancient Shaft"},
  {name: "Ancient Core"},
  {name: "Giant Ancient Core"},
  {name: "Star Fragment"},
  {name: "Lynel Horn"},
  {name: "Lynel Hoof"},
  {name: "Lynel Guts"},
  {name: "Shard of Dinraal's Horn"},
  {name: "Keese Wing"},
  {name: "Rushroom"},
  {name: "Electric Keese Wing"},
  {name: "Hightail Lizard"},
  {name: "Ice Keese Wing"},
  {name: "Hot-Footed Frog"},
  {name: "Fire Keese Wing"},
  {name: "Swift Violet"},
  {name: "White Chuchu Jelly"},
  {name: "Icy Lizalfos Tail"},
  {name: "Sapphire"},
  {name: "Fireproof Lizard"},
  {name: "Moblin Horn"},
  {name: "Moblin Fang"},
  {name: "Smotherwing Butterfly"},
  {name: "Moblin Guts"},
  {name: "Hinox Guts"},
  {name: "Bokoblin Horn"},
  {name: "Bokoblin Fang"},
  {name: "Bokoblin Guts"},
  {name: "Amber"},
  {name: "Luminous Stone"},
  {name: "Molduga Guts"},
  {name: "Yellow Chuchu Jelly"},
  {name: "Voltfruit"},
  {name: "Zapshroom"},
  {name: "Yellow Lizalfos Tail"},
  {name: "Topaz"},
  {name: "Blue Nightshade"},
  {name: "Sunset Firefly"},
  {name: "Silent Shroom"},
  {name: "Sneaky River Snail"},
  {name: "Stealthfin Trout"},
  {name: "Silent Princess"},
  {name: "Red Chuchu Jelly"},
  {name: "Warm Safflina"},
  {name: "Sunshroom"},
  {name: "Red Lizalfos Tail"},
  {name: "Ruby"},
  {name: "Chuchu Jelly"},
  {name: "Keese Eyeball"},
  {name: "Lizalfos Tail"},
  {name: "Lizalfos Horn"},
  {name: "Lizalfos Talon"},
  {name: "Hyrule Bass"},
  {name: "Hearty Bass"},
  {name: "Opal"},
  {name: "Acorn"},
  {name: "Courser Bee Honey"},
  {name: "Energetic Rhino Beetle"},
  {name: "Shard of Farosh's Horn"},
  {name: "Shard of Naydra's Horn"},
  {name: "Dinraal's Scale"},
  {name: "Dinraal's Claw"},
  {name: "Dinraal's Fang"},
  {name: "Farosh's Scale"},
  {name: "Farosh's Claw"},
  {name: "Farosh's Fang"},
  {name: "Naydra's Scale"},
  {name: "Naydra's Claw"},
  {name: "Naydra's Fang"}
])
Level.create!([
  {armor_id: 1, level: 1},
  {armor_id: 1, level: 2},
  {armor_id: 1, level: 3},
  {armor_id: 1, level: 4},
  {armor_id: 2, level: 1},
  {armor_id: 2, level: 2},
  {armor_id: 2, level: 3},
  {armor_id: 2, level: 4},
  {armor_id: 3, level: 1},
  {armor_id: 3, level: 2},
  {armor_id: 3, level: 3},
  {armor_id: 3, level: 4},
  {armor_id: 4, level: 1},
  {armor_id: 4, level: 2},
  {armor_id: 4, level: 3},
  {armor_id: 4, level: 4},
  {armor_id: 5, level: 1},
  {armor_id: 5, level: 2},
  {armor_id: 5, level: 3},
  {armor_id: 5, level: 4},
  {armor_id: 6, level: 1},
  {armor_id: 6, level: 2},
  {armor_id: 6, level: 3},
  {armor_id: 6, level: 4}
])
LevelUpItem.create!([
  {level_id: 1, item_id: 1, count: 5},
  {level_id: 1, item_id: 2, count: 5},
  {level_id: 2, item_id: 2, count: 15},
  {level_id: 2, item_id: 3, count: 10},
  {level_id: 3, item_id: 4, count: 15},
  {level_id: 3, item_id: 5, count: 5},
  {level_id: 4, item_id: 6, count: 2},
  {level_id: 4, item_id: 7, count: 1},
  {level_id: 5, item_id: 1, count: 5},
  {level_id: 5, item_id: 2, count: 5},
  {level_id: 6, item_id: 2, count: 15},
  {level_id: 6, item_id: 3, count: 10},
  {level_id: 7, item_id: 4, count: 15},
  {level_id: 7, item_id: 5, count: 5},
  {level_id: 8, item_id: 6, count: 2},
  {level_id: 8, item_id: 7, count: 1},
  {level_id: 9, item_id: 1, count: 5},
  {level_id: 9, item_id: 2, count: 5},
  {level_id: 10, item_id: 2, count: 15},
  {level_id: 10, item_id: 3, count: 10},
  {level_id: 11, item_id: 4, count: 15},
  {level_id: 11, item_id: 5, count: 5},
  {level_id: 12, item_id: 6, count: 2},
  {level_id: 12, item_id: 7, count: 1},
  {level_id: 14, item_id: 8, count: 3},
  {level_id: 14, item_id: 9, count: 2},
  {level_id: 15, item_id: 9, count: 4},
  {level_id: 15, item_id: 10, count: 1},
  {level_id: 16, item_id: 10, count: 2},
  {level_id: 16, item_id: 11, count: 1},
  {level_id: 17, item_id: 8, count: 1},
  {level_id: 18, item_id: 8, count: 3},
  {level_id: 18, item_id: 9, count: 2},
  {level_id: 19, item_id: 9, count: 4},
  {level_id: 19, item_id: 10, count: 1},
  {level_id: 20, item_id: 10, count: 2},
  {level_id: 20, item_id: 11, count: 1},
  {level_id: 21, item_id: 8, count: 1},
  {level_id: 22, item_id: 8, count: 3},
  {level_id: 22, item_id: 9, count: 2},
  {level_id: 23, item_id: 9, count: 4},
  {level_id: 23, item_id: 10, count: 1},
  {level_id: 24, item_id: 10, count: 2},
  {level_id: 24, item_id: 11, count: 1},
  {level_id: 13, item_id: 8, count: 1}
])
Player.create!([
  {name: "Link"}
])
