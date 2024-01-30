
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'portfolio_visitors';
$conn = mysqli_connect($host, $user, $pass, $db);


$name=$_POST['name']
$email=$_POST['email']
$mobile=$_POST['mobile']
$comments=$_POST['comments']

$query="insert into visitors(v_name,v_email,v_mobile,v_comments) values ($name,$email,$mobile,$comments)";
$result=mysqli_query($conn,$query);
if($result==true){
    echo "hey {$name}, thanks for reaching out";
}
else{
    error
}