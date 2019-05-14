# Hexagonal Traveller

The idea of this project is to reinforce what we have covered in the training while strengthening your understanding of multidimensional arrays. The later portions of this project will require knowledge in HTML and CSS. It will also require research into using HTML (canvas might be useful).

By the end of this project, you should have created a HTML page which you can open in your browser and interact with. This will involve looking at some of the functionalities surrounding `window` and `document` interactions.

## The Deal

The idea is that you control as a character on a hexagonal map, your character can be initiated on any tile at the launch of the application. From the tile which your character begins on, you can move to any tile which is adjacent to the one you are currently positioned on. So, you should have an option of six tiles to move from if you were in the centre of your map for example. A user can choose the tile they wish to move to by clicking that tile.

Below, some user stories are created which you can tick off when you've managed to meet their requirements. User Stories are a great way of breaking down the use case at hand. It also helps reveal edge cases and bring the user experience into the foreground of what we are doing.

```
As a user,
so I can be represented in the game,
there is a Player class.
```

```
As a user,
so there are places to locate my character,
there is a Tile class which holds my Player.
```

```
As a user,
so there is an environment to inhabit the tiles,
there is a Board class.
```

```
As a user,
so there is a game to play,
there is a Game class.
```

```
As a user,
so I don't have a generic square board,
each Board Object is instantiated with a hexagonal tile grid.
```

```
As a user,
so I have somewhere to start,
upon start of Game; my Player is added to a random Tile on the Board.
```

```
As a user,
so I can alter position,
Tiles can accept my Player from one another.
```

```
As a user,
so I don't get confused as to where I am,
once my Player has moved from a Tile, it is no longer stored there.
```

```
As a user,
so I can't cheat,
my Player can only move to adjacent Tiles.
```

```
As a user,
so I can see the map,
the Board is displayed within the view of the Application.
```

```
As a user,
so I can see where I am,
my character is illustrated on the Board.
```

```
As a user,
so I can interact with the board,
I can click a Tile and my Character will move there.
```

```
As a user,
so that I know when I am breaking the rules,
when I click a Tile which I cannot move to, the Game tells me.
```
