#pragma strict


public var maxSpeed : float = 10;
private var facingRight = true;
private var thisRigidbody : Rigidbody2D;
private var animBody : Animator;
private var animArms : Animator;
private var grounded : boolean = false;
private var attacking : boolean = false;

private var name : String;
public var skin : int;
private var fightingStyle : int;
public var playerNumber : int;
public var currentWeapon : int;


var groundCheck : Transform;
var groundRadius : float = 0.2;
var whatIsGround : LayerMask;
var jumpForce : float = 180;
var skinT : int = skin;

var bodyObjects : GameObject[];

function Start ()
{	
	thisRigidbody = this.gameObject.GetComponent("Rigidbody2D");
	animBody = this.gameObject.GetComponent("Animator");
	animBody.SetInteger("Skin", skin);

	//animArms = this.gameObject.transform.Find("Arms").GetComponent("Animator");
	//animArms.SetInteger("Weapon", currentWeapon);

}

function FixedUpdate ()
{
	grounded = Physics2D.OverlapCircle(groundCheck.position, groundRadius, whatIsGround);
	animBody.SetBool("Ground", grounded);

	var move : float;
	move = Input.GetAxis("Player" + playerNumber + "Move");
	

	animBody.SetFloat("Speed", Mathf.Abs(move));

	thisRigidbody.velocity = new Vector2(move * maxSpeed, thisRigidbody.velocity.y);

	if(move > 0 && !facingRight)
		Flip();
	else if(move < 0 && facingRight)
		Flip();
}

function Update()
{	
	if(grounded && Input.GetAxis("Player" + playerNumber + "Jump"))
	{
		animBody.SetBool("Ground", false);
		thisRigidbody.velocity = new Vector2(0, jumpForce);
	}

	if(Input.GetAxis("Player" + playerNumber + "MoveDown"))
	{
		print("Clicked to move down");
	}

	if(Input.GetAxis("Player" + playerNumber + "Attack") > 0)
	{
		//print("Player " + playerNumber + " Attacks");
		animBody.SetBool("Attack", true);
		attacking = true;
	}
	else
	{
		animBody.SetBool("Attack", false);
		attacking = false;
	}

	if(Input.GetAxis("Player" + playerNumber + "SpecialAttack") > 0)
	{
		print("Player " + playerNumber + " Special Attacks");
	}

	if(Input.GetAxis("Player" + playerNumber + "PickupDrop"))
	{
		print("Player " + playerNumber + " pickup/drop toggle.");
	}

	if(Input.GetAxis("Player" + playerNumber + "Block"))
	{
		print("Player " + playerNumber + " Blocked");
	}
}

function Flip()
{
	facingRight = !facingRight;
	var theScale : Vector3 = transform.localScale;
	theScale.x *= -1;
	transform.localScale = theScale;
}

function OnTriggerEnter2D(hit : Collider2D)
{
	
	if(hit.gameObject.tag == "Sword")
	{
		var playerScript : PlayerMovement;
		playerScript = hit.gameObject.transform.parent.GetComponent("PlayerMovement");
		if(playerScript.attacking)
			print("Player " + playerNumber + " just got slashed.");
	}
}