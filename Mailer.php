<?php

/**
 * Description of PHPMailer
 *
 */
class Mailer {
	
	static public function send($to_email, $subject, $body) {
		

		require_once MODX_BASE_PATH . '/DesignAPI/inc/phpmailer/PHPMailerAutoload.php';
		$mailer = new PHPMailer ();
		$mailer->CharSet = 'UTF-8';
		$mailer->ContentType = 'text/html';
		$mailer->Host = $this->config['smtp_host'];
		$mailer->Port = intval ($this->config['smtp_port']);
		$mailer->Username = $this->config['smtp_user'];
		$mailer->Password = $this->config['smtp_pass'];
		$mailer->isSMTP();	// закомментировать, если нужно отключить SMTP
        //$mailer->SMTPSecure = "ssl";	// !!!
        $mailer->SMTPSecure = "tls";	// !!!
		$mailer->SMTPDebug = 0;
		$mailer->SMTPAuth = true;
		
		$mailer->Subject = $subject;
		$mailer->msgHTML ( $body );
		$mailer->addAddress ( $to_email );
		$mailer->setFrom ( $this->config['smtp_user'], $this->config['system_name'] . ' - онлайн кредиты на карту' );

        $res = $mailer->send ();

		// echo "result = " . (($res == false) ? "false" : print_r($res, true)) . "\n";
		// var_dump($mailer->ErrorInfo);
		return $res;
	}

}
