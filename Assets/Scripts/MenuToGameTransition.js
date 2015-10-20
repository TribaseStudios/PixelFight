#pragma strict

static var playersToSpawn : int[];
static var playerSkins : int[];


function Awake ()
{
	playersToSpawn = new int[4];
	playerSkins = new int[4];
	DontDestroyOnLoad(this.gameObject);
}

function Update ()
{

}