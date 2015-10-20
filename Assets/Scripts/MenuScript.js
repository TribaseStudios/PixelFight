#pragma strict

var menuScreenDisplayed : String;
var activePlayers : int[];

var characterChoices : GameObject[];

var mainScreen : GameObject;
var playerJoinScreen : GameObject;


//var charactersAvail : Sprite[];
//var playerJoinScreensText : UI.Text[];
//var playerCharacterSelect : UI.Image[];




function Start ()
{
	activePlayers = new int[4];
	var connectedGamePads : String[];
	connectedGamePads = Input.GetJoystickNames();
	//print(connectedGamePads.length);
}

function Update ()
{
	if(mainScreen.active)
	{
		if(Input.GetButton("Player1Start") || Input.GetButton("Player2Start") || Input.GetButton("Player3Start") || Input.GetButton("Player4Start"))
		{
			HideMenuItem(mainScreen);
			ShowMenuItem(playerJoinScreen);
		}
	}

	if(playerJoinScreen.active)
	{
		if(Input.GetAxis("Submit"))
		{
			Application.LoadLevel("Test1");
		}
	}


	// if(menuScreenDisplayed == "AddPlayerScreen")
	// {
	// 	print("checking");
	// 	LookForJoiningPlayer();
	// 	SelectCharacters();
	// }
}



// function SelectCharacters()
// {
// 	for(var p = 0; p < activePlayers.length; p++)
// 	{
// 		if(activePlayers[p] != 0)
// 		{
// 			if(Input.GetAxis("Player" + activePlayers[p+1] + "Move") < 0)
// 			{
// 				if(playerCharacterSelect[p].sprite == charactersAvail[0])
// 				{
// 					return;
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[1])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[0];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[2])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[1];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[3])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[2];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[4])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[3];
// 				}
// 			}

// 			if(Input.GetAxis("Player" + activePlayers[p+1] + "Move") > 0)
// 			{
// 				if(playerCharacterSelect[p].sprite == charactersAvail[0])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[1];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[1])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[2];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[2])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[3];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[3])
// 				{
// 					playerCharacterSelect[p].sprite = charactersAvail[4];
// 				}
// 				else if(playerCharacterSelect[p].sprite == charactersAvail[4])
// 				{
// 					return;
// 				}
// 			}
// 		}
// 	}
// }


// function LookForJoiningPlayer()
// {
// 	if(Input.GetKeyDown("1"))
// 	//if(Input.GetAxis("joystick 1 button 9"))
// 	{
// 		for(var j = 0; j < activePlayers.length; j++)
// 		{
// 			if(activePlayers[j] == 1)
// 			{
// 				return;
// 			}
// 			else if(activePlayers[j] == 0)
// 			{
// 				activePlayers[j] = 1;
// 				return;
// 			}		
// 		}
// 	}

// 	if(Input.GetKeyDown("2"))
// 	//if(Input.GetAxis("joystick 1 button 9"))
// 	{
// 		for(var k = 0; k < activePlayers.length; k++)
// 		{
// 			if(activePlayers[k] == 2)
// 			{
// 				return;
// 			}
// 			else if(activePlayers[k] == 0)
// 			{
// 				activePlayers[k] = 2;
// 				return;
// 			}		
// 		}
// 	}

// 	if(Input.GetKeyDown("3"))
// 	//if(Input.GetAxis("joystick 1 button 9"))
// 	{
// 		for(var m = 0; m < activePlayers.length; m++)
// 		{
// 			if(activePlayers[m] == 3)
// 			{
// 				return;
// 			}
// 			else if(activePlayers[m] == 0)
// 			{
// 				activePlayers[m] = 3;
// 				return;
// 			}		
// 		}
// 	}

// 	if(Input.GetKeyDown("4"))
// 	//if(Input.GetAxis("joystick 1 button 9"))
// 	{
// 		for(var n = 0; n < activePlayers.length; n++)
// 		{
// 			if(activePlayers[n] == 4)
// 			{
// 				return;
// 			}
// 			else if(activePlayers[n] == 0)
// 			{
// 				activePlayers[n] = 4;
// 				return;
// 			}		
// 		}
// 	}

// 	//ShowJoinedPlayers();
// }

// function ShowJoinedPlayers()
// {
// 	for(var i = 0; i < activePlayers.length; i++)
// 	{	
// 		if(activePlayers[i] != 0)
// 		{
// 			playerJoinScreensText[i].text = "Controller " + activePlayers[i] + " is Player " + (i + 1);
// 			yield WaitForSeconds(2);
// 			playerJoinScreensText[i].enabled = false;
// 			playerCharacterSelect[i].enabled = true;
// 		}
// 	}
// }

function HideMenuItem(objectToHide : GameObject)
{
	objectToHide.SetActive(false);
}

function ShowMenuItem(objectToShow : GameObject)
{
	objectToShow.SetActive(true);
	menuScreenDisplayed = objectToShow.name;
}