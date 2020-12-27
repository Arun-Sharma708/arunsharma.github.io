var x = document.getElementById("myAudio");

function toggleAudio()
{
	if(x.paused)
	{
		x.play();
	}
	else
	{
		x.pause();
	}
}