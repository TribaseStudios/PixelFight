#pragma strict



var playerNumber : int;
var playerJoinText : UI.Text;
var playerCharacterSelect : UI.Image;
var playerChoice : GameObject;
//var availSkins : Sprite[];
//var leftArrow : GameObject;
//var rightArrow : GameObject;
var pressForReady : GameObject;
var ready : GameObject;

static var menuScript : MenuScript;
static var menuToGameTransitionScript : MenuToGameTransition;
private var currentChoice : int = 0;
private var swappingSkin : boolean = false;

var playerSkin : Sprite;


function Start ()
{
	menuScript = Camera.main.GetComponent("MenuScript");
	menuToGameTransitionScript = GameObject.Find("MenuToGameDataTransition").GetComponent("MenuToGameTransition");
}

function Update ()
{
	if(Input.GetAxis("Player" + playerNumber + "Start"))
	{
		if(playerJoinText.enabled)
		{
			playerJoinText.transform.gameObject.SetActive(false);
			playerCharacterSelect.transform.gameObject.SetActive(true);
			playerChoice.gameObject.SetActive(true);
			menuToGameTransitionScript.playersToSpawn[playerNumber - 1] = playerNumber;
		}
	}

	if(playerCharacterSelect.enabled && playerCharacterSelect.transform.gameObject.active)
	{
		if(Input.GetAxis("Player" +playerNumber + "Move") > 0 && !swappingSkin)
		{
			swappingSkin = true;
			if(currentChoice < menuScript.characterChoices.length -1)
			{
				currentChoice += 1;
				MoveCharacterChoice(currentChoice);
				menuToGameTransitionScript.playerSkins[playerNumber - 1] = currentChoice;

				//ChangeSkin(currentSkin);
				// if(currentSkin == availSkins.length - 1)
				// {
				// 	rightArrow.SetActive(false);
				// }
				// else
				// {
				// 	rightArrow.SetActive(true);
				// }
			}
		}
		else if(Input.GetAxis("Player" + playerNumber + "Move") < 0 && !swappingSkin)
		{
			swappingSkin = true;
			if(currentChoice > 0)
			{
				currentChoice -= 1;
				MoveCharacterChoice(currentChoice);
				menuToGameTransitionScript.playerSkins[playerNumber - 1] = currentChoice;
				//ChangeSkin(currentSkin);
			}
		}
		else if(Input.GetAxis("Player" + playerNumber + "Move") == 0)
		{
			swappingSkin = false;
		}

		// if(currentSkin == 0)
		// {
		// 	this.leftArrow.SetActive(false);
		// }
		// else
		// {
		// 	this.leftArrow.SetActive(true);
		// }
		// if(currentSkin == availSkins.length - 1)
		// {
		// 	this.rightArrow.SetActive(false);
		// }
		// else
		// {
		// 	this.rightArrow.SetActive(true);
		// }

		if(Input.GetAxis("Player" + playerNumber + "Jump"))
		{
			pressForReady.SetActive(false);
			ready.SetActive(true);
		}
	}
}

function MoveCharacterChoice(currentSelection : int)
{
	playerChoice.transform.position = menuScript.characterChoices[currentSelection].transform.position;
	var choiceSprite : UI.Image;
	choiceSprite = menuScript.characterChoices[currentSelection].GetComponent("Image");
	playerCharacterSelect.sprite = choiceSprite.sprite;
}