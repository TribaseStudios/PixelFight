#pragma strict

private var players : GameObject[];
var camSpeed : float;
var minX = Mathf.Infinity; 
var maxX = -Mathf.Infinity; 
var minY = Mathf.Infinity; 
var maxY = -Mathf.Infinity;
var cameraBuffer : Vector2;
var canMoveCamera : boolean = false;

function Start ()
{
	yield WaitForSeconds(1);
	canMoveCamera = true;
}

function Update ()
{
	if(canMoveCamera)
	{
		CalculateBounds();
		//CalculateCameraPosAndSize();
	}
}

function GetPlayersInGame()
{
	players = GameObject.FindGameObjectsWithTag("Player");
	//print("Players In Game = " + players.length);
}

function CalculateBounds()
{
	var minX : float = 0; 
	var maxX : float = 0; 
	var minY : float = 0; 
	var maxY : float = 0;

	if(players != null && players.length > 0)
	{
		for(player in players)
		{
			var tempPlayer : Vector2 = player.transform.position;
			//X Bounds
			if (tempPlayer.x < minX)
				minX = tempPlayer.x;

			if (tempPlayer.x > maxX)
				maxX = tempPlayer.x;

			//Y Bounds
			if (tempPlayer.y < minY)
				minY = tempPlayer.y;
			
			if (tempPlayer.y > maxY)
				maxY = tempPlayer.y;
		}

		CalculateCameraPosAndSize(minX, maxX, minY, maxY);
	}		
}

function CalculateCameraPosAndSize(minX : float, maxX : float, minY : float, maxY : float)
{
	//Position 
	var cameraCenter : Vector2 = Vector3.zero;
	for(player in players)
	{
		cameraCenter += player.transform.position;
	}
	var finalCameraCenter : Vector2 = cameraCenter / players.Length;
	//Rotates and Positions camera around a point
	//var rot = Quaternion.Euler(angles);
	//var pos = rot * new Vector3(0f, 0f, -camDist) + finalCameraCenter; 
	//Camera.main.transform.rotation = rot;
	var currentCamPos : Vector2 = Camera.main.transform.position;
	//Camera.main.transform.position = Vector2.Lerp(currentCamPos, finalCameraCenter, camSpeed * Time.deltaTime);
	Camera.main.transform.position.x = finalCameraCenter.x;
	Camera.main.transform.position.y = finalCameraCenter.y;
	//var finalLookAt : Vector3;
	//finalLookAt = Vector3.Lerp (finalLookAt, finalCameraCenter, camSpeed * Time.deltaTime);
	//Camera.main.transform.LookAt(finalLookAt);
	//Size
	var sizeX : float = maxX - minX + cameraBuffer.x;
	var sizeY : float = maxY - minY + cameraBuffer.y;
	var camSize = (sizeX > sizeY ? sizeX : sizeY);
	
	if(camSize < 16)
	{
		camSize = 16;
	}
	Camera.main.orthographicSize = camSize * 0.5f;
}