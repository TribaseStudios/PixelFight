

var currentPlayers : Array;
var playerPrefab : GameObject;
var newestPlayer : GameObject;
var newPlayerInfo : PlayerMovement;
var UpdateCameraScript : UpdateCamera;
static var menuToGameTransitionScript : MenuToGameTransition;
static var levelInfoScript : LevelInfo;
static var spawnPoints : Array;


function Start ()
{
	currentPlayers = new Array();
	UpdateCameraScript = Camera.main.GetComponent("UpdateCamera");
	menuToGameTransitionScript = GameObject.Find("MenuToGameDataTransition").GetComponent("MenuToGameTransition");

	levelInfoScript = Camera.main.GetComponent("LevelInfo");

	spawnPoints = new Array();
	spawnPoints = levelInfoScript.spawnPoints;
	for(player in menuToGameTransitionScript.playersToSpawn)
	{
		if(player != 0)
		{
			CreatePlayer(player, menuToGameTransitionScript.playerSkins[player - 1]);
		}
	}
}

function CreatePlayer(playerNumber : int, playerSkin : int)
{
	var spawnLocation : Transform;
	print("Spawn points length = " + spawnPoints.length);
	var rand : int;
	rand = Random.Range(0, spawnPoints.length);
	
	
	spawnLocation = spawnPoints[rand].transform;
	spawnPoints.RemoveAt(rand);
	newestPlayer = Instantiate(playerPrefab, spawnLocation.position, transform.rotation);
	newPlayerInfo = newestPlayer.GetComponent("PlayerMovement");
	newPlayerInfo.name = "Player" + playerNumber;
	newPlayerInfo.playerNumber = playerNumber;
	newPlayerInfo.skin = playerSkin + 1;
	currentPlayers.push(newestPlayer);	
	UpdateCameraScript.GetPlayersInGame();
}

function Update ()
{

	if(Input.GetKeyDown("1"))
	{
		newestPlayer = Instantiate(playerPrefab, Vector3(0, 0, 0), transform.rotation);
		newPlayerInfo = newestPlayer.GetComponent("PlayerMovement");
		newPlayerInfo.name = "Andrew";
		newPlayerInfo.playerNumber = 1;
		currentPlayers.push(newestPlayer);	
		UpdateCameraScript.GetPlayersInGame();
	}

	if(Input.GetKeyDown("2"))
	{
		newestPlayer = Instantiate(playerPrefab, Vector3(0, 0, 0), transform.rotation);
		newPlayerInfo = newestPlayer.GetComponent("PlayerMovement");
		newPlayerInfo.name = "Chris";
		newPlayerInfo.playerNumber = 2;
		currentPlayers.push(newestPlayer);
		UpdateCameraScript.GetPlayersInGame();
	}

	if(Input.GetKeyDown("3"))
	{
		newestPlayer = Instantiate(playerPrefab, Vector3(0, 0, 0), transform.rotation);
		newPlayerInfo = newestPlayer.GetComponent("PlayerMovement");
		newPlayerInfo.name = "Shef";
		newPlayerInfo.playerNumber = 3;
		currentPlayers.push(newestPlayer);
		UpdateCameraScript.GetPlayersInGame();
	}

	if(Input.GetKeyDown("4"))
	{
		newestPlayer = Instantiate(playerPrefab, Vector3(0, 0, 0), transform.rotation);
		newPlayerInfo = newestPlayer.GetComponent("PlayerMovement");
		newPlayerInfo.name = "Blake";
		newPlayerInfo.playerNumber = 4;
		UpdateCameraScript.GetPlayersInGame();
	}
		

	// if(Input.GetKeyDown("i"))
	// {
	// 	for(var player in currentPlayers)
	// 	{
	// 		print(player.name);
	// 	}
	// }
}