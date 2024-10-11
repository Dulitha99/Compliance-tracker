import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiSettings } from 'react-icons/fi';

const Policies = () => {
  const [policies] = useState([
    {
      id: 1, 
      title: 'Acceptable Use Policy', 
      content: `
      The Acceptable Use Policy (AUP) outlines the appropriate use of Ebeyonds Pvt Ltd's information systems, internet access, and company-provided devices by employees, contractors, and third-party vendors. Compliance with these guidelines is critical to safeguarding company resources, maintaining productivity, and minimizing risks.

      <strong>1. General Guidelines:</strong>

      - <strong><em>Authorized Use:</em></strong> Ebeyonds Pvt Ltd’s IT systems, networks, and devices must be used exclusively for legitimate business purposes. All users are required to use these resources in alignment with their job roles and specific responsibilities. Personal use should be minimal and should not interfere with professional duties.

      - <strong><em>Company Property:</em></strong> All digital devices, such as computers, mobile devices, software, and data, are the property of Ebeyonds Pvt Ltd. Users must handle these assets responsibly and refrain from using them for personal, unauthorized, or non-business-related purposes. This includes avoiding illegal downloads, streaming, or accessing inappropriate content.

      - <strong><em>Respect for Policies:</em></strong> Employees must adhere to this Acceptable Use Policy and any other relevant company policies, including but not limited to the Data Protection Policy, IT Security Policy, and Email Usage Policy. Employees should familiarize themselves with these policies and seek clarification from management if necessary.

      - <strong><em>Monitoring and Privacy:</em></strong> Ebeyonds Pvt Ltd reserves the right to monitor the usage of its IT systems to ensure compliance with all policies. This includes monitoring internet activity, email communication, and any data stored on or transmitted through company devices. Users should have no expectation of privacy when using company resources for any purpose. Monitoring may be conducted for security purposes, policy enforcement, and performance evaluation.

      - <strong><em>Software and Licensing:</em></strong> Employees are prohibited from installing unauthorized software on company systems. All software used must be properly licensed, and employees should only use software approved by the IT department. This includes ensuring that all operating systems and applications are regularly updated to mitigate security vulnerabilities.

      - <strong><em>Internet Usage:</em></strong> Internet access provided by Ebeyonds Pvt Ltd should be used primarily for business purposes. The company reserves the right to restrict access to specific websites that may pose security risks or be inappropriate for the work environment. Employees are encouraged to use company-provided resources efficiently and avoid excessive personal browsing during work hours.

      - <strong><em>Data Protection:</em></strong> Users are responsible for ensuring the security of the data they access, create, or transmit. Sensitive information, especially client or internal data, must be protected in accordance with the company's data protection guidelines. Employees should use encryption for sensitive data and refrain from discussing confidential information in public areas.

      - <strong><em>Reporting Incidents:</em></strong> Employees are required to report any security incidents or suspicious activity, such as phishing attempts, malware infections, or data breaches, to the IT department immediately. Prompt reporting can help mitigate potential damage and improve the overall security posture of the organization.

      - <strong><em>Use of Personal Devices:</em></strong> Employees are discouraged from using personal devices for work-related tasks unless expressly permitted. If personal devices are used, they must comply with the company's security standards, including the use of up-to-date antivirus software and secure connections.

      <strong>2. Consequences of Violation:</strong> Violations of this policy may result in disciplinary action, which could include termination of employment, legal action, or reporting to law enforcement if deemed necessary. The severity of the violation will be assessed, and appropriate actions will be taken to protect company interests.

      By adhering to the Acceptable Use Policy, employees contribute to a secure, productive, and respectful work environment at Ebeyonds Pvt Ltd. Regular training and updates will be provided to ensure ongoing understanding and compliance with this policy.
      `
},

    {
      id: 2, 
      title: 'Data Protection Policy', 
      content: `
      The Data Protection Policy establishes the guidelines for collecting, processing, storing, and sharing personal and sensitive data at Ebeyonds Pvt Ltd. This policy is designed to protect the privacy of individuals and ensure compliance with applicable data protection laws and regulations. All employees, contractors, and third parties are required to adhere to these guidelines.

      <strong>1. Data Collection Guidelines:</strong>

      - <strong><em>Purpose Limitation:</em></strong> Data must be collected only for specific, legitimate purposes and not processed in a manner incompatible with those purposes.
      - <strong><em>Data Minimization:</em></strong> Only the data necessary for the intended purpose should be collected and processed.
      - <strong><em>Informed Consent:</em></strong> Individuals must be informed about the collection of their data and provide explicit consent, where required, prior to data collection.

      <strong>2. Data Processing Guidelines:</strong>

      - <strong><em>Lawfulness of Processing:</em></strong> Data processing must comply with applicable laws, and data subjects’ rights must be respected.
      - <strong><em>Accuracy:</em></strong> Data must be accurate and kept up to date; incorrect data must be corrected or deleted promptly.
      - <strong><em>Security Measures:</em></strong> Appropriate technical and organizational measures must be implemented to protect data against unauthorized access, loss, or destruction.

      <strong>3. Data Storage and Retention:</strong>

      - <strong><em>Data Storage:</em></strong> Data must be stored securely in designated systems with restricted access to authorized personnel only.
      - <strong><em>Data Retention Period:</em></strong> Data must not be kept longer than necessary for the purposes for which it was collected. Retention periods must be established for different types of data.
      - <strong><em>Data Disposal:</em></strong> When data is no longer needed, it must be securely deleted or anonymized to prevent unauthorized access.

      <strong>4. Data Sharing and Transfer:</strong>

      - <strong><em>Restricted Sharing:</em></strong> Data must not be shared with third parties without proper authorization or legal basis.
      - <strong><em>International Data Transfers:</em></strong> When transferring data internationally, appropriate safeguards must be in place to protect the data in accordance with applicable laws.
      - <strong><em>Third-Party Contracts:</em></strong> Contracts with third parties who process data on behalf of Ebeyonds Pvt Ltd must include data protection clauses to ensure compliance with this policy.

      <strong>5. Rights of Data Subjects:</strong>

      - <strong><em>Access and Portability:</em></strong> Individuals have the right to access their data and request a copy in a structured, commonly used format.
      - <strong><em>Rectification:</em></strong> Individuals have the right to request correction of inaccurate or incomplete data.
      - <strong><em>Erasure:</em></strong> Individuals have the right to request deletion of their data under certain conditions (the "right to be forgotten").

      <strong>6. Enforcement and Consequences:</strong>

      - <strong><em>Monitoring and Compliance:</em></strong> The Data Protection Officer (DPO) will regularly monitor compliance with this policy and provide guidance as needed.
      - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Employees who fail to comply with this policy may face disciplinary actions, including:
        - Mandatory data protection training
        - Temporary suspension of data access
        - Escalation to management for severe violations

      - <strong><em>Reporting Data Breaches:</em></strong> Employees must immediately report any suspected data breaches or unauthorized access to the DPO. The organization will take necessary steps to mitigate the impact and notify affected individuals as required by law.

      By following the Data Protection Policy, employees contribute to maintaining the privacy and security of personal data at Ebeyonds Pvt Ltd. Regular training and updates will be provided to ensure all employees understand the importance of data protection.
      `
},

    {
      id: 3, 
      title: 'Password Management Policy', 
      content: `
      The Password Management Policy outlines the best practices and requirements for creating, using, and managing passwords at Ebeyonds Pvt Ltd. This policy ensures the secure use of passwords to prevent unauthorized access to company systems and sensitive data. All employees, contractors, and third parties are required to adhere to the guidelines set out in this policy.
    
      <strong>1. Password Creation Guidelines:</strong>
    
      - <strong><em>Minimum Length:</em></strong> All passwords must be at least 12 characters long to ensure a robust level of security.
      - <strong><em>Complexity Requirements:</em></strong> Passwords must include a combination of:
        - At least one uppercase letter (A–Z)
        - At least one lowercase letter (a–z)
        - At least one number (0–9)
        - At least one special character (e.g., !, @, #, $, %, &, *)
    
      - <strong><em>Avoid Common Words and Patterns:</em></strong> Passwords should not include easily guessable information, such as common words, family names, birthdays, or sequential patterns (e.g., 12345, abcde).
    
      - <strong><em>Passphrase Method:</em></strong> Employees are encouraged to use a passphrase, such as "BlueMoonJumps#9Waves!" that is both memorable and secure.
  
      <strong>2. Password Usage Guidelines:</strong>
    
      - <strong><em>Unique Passwords for Each System:</em></strong> Employees must not reuse the same password across multiple systems, platforms, or accounts. Each system must have its own unique password to minimize risk.
      - <strong><em>Password Protection:</em></strong> Passwords must not be shared with anyone, including colleagues or IT personnel. In cases where technical support is needed, temporary access should be granted without sharing passwords.
      - <strong><em>Two-Factor Authentication (2FA):</em></strong> Employees must enable 2FA wherever possible to add an extra layer of security.
      - <strong><em>Avoid Auto-Save Features:</em></strong> Employees should avoid using browser auto-save features or unauthorized password managers.
      - <strong><em>Locking Devices:</em></strong> Employees must lock their devices when not in use to prevent unauthorized access.
    
      <strong>3. Password Change Requirements:</strong>
    
      - <strong><em>Mandatory Password Changes:</em></strong> Employees must change their passwords every 90 days, with reminders issued by the IT department.
      - <strong><em>Password Changes After Security Incidents:</em></strong> Employees must immediately change their passwords and notify IT if they suspect their passwords have been compromised.
      - <strong><em>Avoiding Reuse of Previous Passwords:</em></strong> Employees cannot reuse any of their last 5 passwords. The system will reject any password that is too similar to previously used ones.
      - <strong><em>Forced Changes After Breach:</em></strong> In case of a data breach, IT may mandate immediate password changes across affected systems.
    
      <strong>4. Storing Passwords Securely:</strong>
    
      - <strong><em>Prohibition of Writing Down Passwords:</em></strong> Employees are prohibited from writing down passwords or saving them in unsecured digital formats.
      - <strong><em>Secure Password Managers:</em></strong> IT-approved password managers that offer encryption may be used to store and manage passwords securely.
      - <strong><em>Avoid Storing Passwords in Shared Documents:</em></strong> Passwords must not be stored in shared documents, folders, or emails accessible by others.
      - <strong><em>Use of Encryption:</em></strong> Sensitive files requiring password access must be encrypted.
    
      <strong>5. Enforcement and Consequences:</strong>
    
      - <strong><em>Monitoring and Auditing:</em></strong> The IT department will regularly monitor and audit password strength across systems to ensure compliance.
      - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Employees who fail to adhere to this policy may face disciplinary actions, such as:
        - Mandatory security training
        - Temporary suspension of system access
        - Escalation to management for severe violations
    
      - <strong><em>Immediate Action After Compromise:</em></strong> If an account is compromised due to non-compliance, the IT department may revoke access, reset passwords, and require further training before restoring access.
      - <strong><em>Account Lockouts:</em></strong> After 5 failed login attempts, the account will be temporarily locked to prevent brute-force attacks. Employees must contact IT to regain access after identity verification.
    
      By following the Password Management Policy, employees help protect the systems and data of Ebeyonds Pvt Ltd. Regular training and updates will be provided to ensure understanding of password security.
      `
    },
    {
      id: 5,
      title: 'Incident Response Policy',
      content: `
      The Incident Response Policy establishes the framework for identifying, managing, and responding to security incidents at Ebeyonds Pvt Ltd. This policy aims to minimize the impact of security incidents on the organization’s operations, assets, and reputation. All employees, contractors, and third parties are required to follow the guidelines outlined in this policy.

      <strong>1. Definition of an Incident:</strong>

      - <strong><em>Security Incident:</em></strong> An incident is defined as any event that compromises the confidentiality, integrity, or availability of company data, systems, or networks. This includes, but is not limited to, unauthorized access, data breaches, malware infections, denial-of-service attacks, and insider threats.

      <strong>2. Incident Response Team (IRT):</strong>

      - <strong><em>Formation of the IRT:</em></strong> An Incident Response Team (IRT) will be established, comprising members from IT, security, legal, and management to coordinate response efforts. Team members will receive specialized training to handle various incident types effectively.

      - <strong><em>Roles and Responsibilities:</em></strong> The IRT is responsible for:
        - Detecting and analyzing incidents.
        - Containing and eradicating threats.
        - Recovering from incidents and restoring normal operations.
        - Communicating with stakeholders and documenting the response process.

      <strong>3. Incident Reporting Procedures:</strong>

      - <strong><em>Reporting Mechanism:</em></strong> All employees must report any suspected security incidents immediately to the IT department via the designated reporting channels (email, hotline, or incident ticketing system). Timely reporting is crucial to mitigating potential damage.

      - <strong><em>Incident Classification:</em></strong> Upon receiving a report, the IT department will classify the incident based on severity, potential impact, and urgency. Classification will guide the response actions and resource allocation.

      <strong>4. Incident Response Phases:</strong>

      - <strong><em>Preparation:</em></strong> The organization will implement proactive measures, including security training, regular security assessments, and incident response simulations, to enhance readiness for potential incidents.

      - <strong><em>Detection and Analysis:</em></strong> Continuous monitoring of systems and networks will be conducted to detect anomalies. Detailed analysis will follow to determine the nature and scope of the incident.

      - <strong><em>Containment:</em></strong> Immediate steps will be taken to contain the incident and prevent further damage. This may involve isolating affected systems, blocking malicious IP addresses, or disabling compromised accounts.

      - <strong><em>Eradication:</em></strong> After containment, the IRT will identify and eliminate the root cause of the incident. This may include removing malware, closing vulnerabilities, or revoking unauthorized access.

      - <strong><em>Recovery:</em></strong> Affected systems will be restored to normal operation, and data will be recovered from backups if necessary. Monitoring will be intensified during the recovery phase to ensure no further incidents occur.

      - <strong><em>Post-Incident Review:</em></strong> After resolution, a thorough review will be conducted to evaluate the incident response process, identify lessons learned, and make recommendations for improving the incident response plan.

      <strong>5. Communication Protocols:</strong>

      - <strong><em>Internal Communication:</em></strong> During an incident, communication with internal stakeholders will be managed to ensure everyone is informed of the situation and response efforts without causing unnecessary panic.

      - <strong><em>External Communication:</em></strong> Any communication with external parties, including customers, media, or regulators, will be coordinated through designated spokespeople to maintain a consistent and accurate message.

      <strong>6. Training and Awareness:</strong>

      - <strong><em>Regular Training:</em></strong> Employees will receive training on recognizing potential security incidents, the reporting process, and the importance of maintaining a secure environment. This training will be refreshed regularly to keep pace with evolving threats.

      <strong>7. Enforcement and Consequences:</strong>

      - <strong><em>Monitoring and Auditing:</em></strong> The IT department will conduct regular audits and assessments of incident response procedures to ensure compliance and effectiveness.

      - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Employees who fail to report incidents or comply with this policy may face disciplinary actions, including:
        - Mandatory security training
        - Temporary suspension of access to company systems
        - Escalation to management for severe violations

      By adhering to the Incident Response Policy, employees contribute to protecting the information assets and overall security posture of Ebeyonds Pvt Ltd. Regular reviews and updates will ensure the policy remains relevant in the face of changing security landscapes.
      `
},
{
  id: 6,
  title: 'Data Backup Policy',
  content: `
  The Data Backup Policy establishes the requirements and procedures for creating, storing, and managing backups of critical data at Ebeyonds Pvt Ltd. This policy aims to ensure data integrity, availability, and recoverability in the event of data loss due to accidental deletion, hardware failure, cyberattacks, or natural disasters. All employees, contractors, and third parties are required to adhere to this policy.

  <strong>1. Purpose of Data Backups:</strong>

  - <strong><em>Data Protection:</em></strong> Backups are essential to protect against data loss and ensure business continuity.
  - <strong><em>Regulatory Compliance:</em></strong> Adhering to this policy helps ensure compliance with relevant laws and regulations regarding data retention and protection.

  <strong>2. Backup Schedule:</strong>

  - <strong><em>Frequency of Backups:</em></strong> Backups must be performed regularly based on the criticality of the data:
    - <strong>Daily Backups:</strong> Critical business data should be backed up daily.
    - <strong>Weekly Backups:</strong> Non-critical data should be backed up at least weekly.
    - <strong>Monthly Backups:</strong> A comprehensive backup of all data should be conducted monthly.

  - <strong><em>Backup Window:</em></strong> Backups should be scheduled during off-peak hours to minimize impact on system performance.

  <strong>3. Backup Types:</strong>

  - <strong><em>Full Backups:</em></strong> A complete copy of all data should be performed monthly.
  - <strong><em>Incremental Backups:</em></strong> Daily backups should capture only the changes made since the last backup.
  - <strong><em>Differential Backups:</em></strong> Weekly backups should capture changes made since the last full backup.

  <strong>4. Backup Storage:</strong>

  - <strong><em>Secure Storage:</em></strong> Backups must be stored securely to protect against unauthorized access, data loss, and environmental hazards.
  - <strong><em>Offsite Storage:</em></strong> Copies of critical backups should be stored offsite or in a cloud environment to ensure data availability in the event of a local disaster.
  - <strong><em>Media Rotation:</em></strong> Backup media should be rotated regularly to prevent data degradation and ensure reliable recovery.

  <strong>5. Data Restoration Procedures:</strong>

  - <strong><em>Testing Restorations:</em></strong> Regular testing of backup restoration procedures should be conducted to ensure data can be restored successfully and promptly.
  - <strong><em>Documentation of Procedures:</em></strong> Detailed documentation of the backup and restoration process must be maintained and accessible to relevant personnel.

  <strong>6. Retention and Disposal:</strong>

  - <strong><em>Backup Retention Period:</em></strong> Backups must be retained for a specified period based on regulatory requirements and organizational needs:
    - <strong>Daily Backups:</strong> Retained for 30 days.
    - <strong>Weekly Backups:</strong> Retained for 90 days.
    - <strong>Monthly Backups:</strong> Retained for 1 year.
  - <strong><em>Secure Disposal:</em></strong> Backup media that are no longer needed must be securely erased or physically destroyed to prevent unauthorized access.

  <strong>7. Roles and Responsibilities:</strong>

  - <strong><em>IT Department:</em></strong> The IT department is responsible for implementing and managing the backup process, including scheduling backups, monitoring success, and conducting restoration tests.
  - <strong><em>Employees:</em></strong> Employees must ensure that critical data is stored in designated locations for backup and report any issues with data availability to the IT department.

  <strong>8. Compliance and Enforcement:</strong>

  - <strong><em>Monitoring Compliance:</em></strong> The IT department will regularly monitor and audit backup processes to ensure adherence to this policy.
  - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Employees who fail to comply with this policy may face disciplinary actions, including:
    - Mandatory training on data management practices
    - Temporary suspension of data access
    - Escalation to management for severe violations

  By following the Data Backup Policy, employees help protect the integrity and availability of critical data at Ebeyonds Pvt Ltd. Regular reviews and updates will ensure the policy remains relevant and effective in addressing data protection needs.
  `
},
{
  id: 7,
  title: 'Remote Working and Access Policy',
  content: `
  The Remote Working and Access Policy outlines the standards and security requirements for employees, contractors, and third parties accessing Ebeyonds Pvt Ltd’s systems and data from remote locations. This policy is designed to protect company information while enabling flexible work environments. All personnel must adhere to these guidelines to ensure the security and integrity of organizational assets.

  <strong>1. Definition of Remote Working:</strong>
  
  - Remote working includes any situation where personnel operate from locations outside the office, including teleworking, telecommuting, flexible workplace, virtual work environments, and remote maintenance.

  <strong>2. Compliance with Company Rules:</strong>
  
  - <strong><em>Adherence to Policies:</em></strong> Employees must follow all company policies related to information security, including clear desk protocols, printing guidelines, disposal of assets, and reporting information security events to prevent accidental exposure of sensitive data.

  <strong>3. Endpoint Security Requirements:</strong>
  
  - <strong><em>Antivirus Software:</em></strong> All laptops and devices accessing the Ebeyonds Pvt Ltd network must have client-side antivirus software installed. This software must:
    - Detect and quarantine malicious software.
    - Perform regular system scans.
    - Have automatic updates enabled to ensure the latest protection.

  <strong>4. Secure Data Transmission:</strong>
  
  - <strong><em>Transport Security:</em></strong> The use of secure transport protocols (TLS) or Virtual Private Network (VPN) is mandatory when transmitting confidential information over public Wi-Fi to mitigate the risks of eavesdropping and man-in-the-middle attacks.

  <strong>5. Home Network Security:</strong>
  
  - <strong><em>Wi-Fi Configuration:</em></strong> When working from home, employees must change default Wi-Fi settings, including the network name (SSID), password, and administrative access credentials.
  - <strong><em>Network Setup for Administrators:</em></strong> System administrators are advised to create a work-specific network using strong WPA3 encryption, or at least WPA2 with a robust password. If supported, a dedicated VLAN should be set up, and WPS (Wi-Fi Protected Setup) and UPnP (Universal Plug and Play) should be disabled unless specifically required.

  <strong>6. Connecting to Networks:</strong>
  
  - <strong><em>Firewall Protection:</em></strong> Users must not connect to any outside network without having a secure, up-to-date software firewall configured on their mobile device.
  - <strong><em>Prohibition of Security Control Changes:</em></strong> Employees are prohibited from changing or disabling any organizational security controls, including personal firewalls and antivirus software on systems used to access Ebeyonds Pvt Ltd resources.

  <strong>7. Remote Access Software:</strong>
  
  - <strong><em>Approved Tools:</em></strong> Use of remote access software and/or services (e.g., VPN client) is permitted only if provided by the company and configured for multifactor authentication (MFA).
  - <strong><em>Unauthorized Software:</em></strong> The installation or use of unauthorized remote access technologies on any Ebeyonds Pvt Ltd system is strictly prohibited.

  <strong>8. Public Computer Access:</strong>
  
  - <strong><em>Session Security:</em></strong> If accessing company resources from a public computer (e.g., business center, hotel), employees must log out of all sessions and avoid saving credentials. They should not check “remember me” options, and must collect all printed materials before leaving.
  - <strong><em>File Download Restrictions:</em></strong> Employees must not download files to any non-Ebeyonds Pvt Ltd controlled systems.

  By adhering to the Remote Working and Access Policy, employees contribute to maintaining the security and integrity of Ebeyonds Pvt Ltd’s information systems. Regular training and updates will be provided to ensure all personnel understand the importance of these guidelines.
  `
},
{
  id: 8,
  title: 'Email and Communication Activities Policy',
  content: `
  The Email and Communication Activities Policy outlines acceptable use of email and communication resources at Ebeyonds Pvt Ltd. This policy is designed to promote responsible communication while ensuring the integrity and security of company resources. All employees, contractors, and third parties are required to adhere to these guidelines when using company email and communication systems.

  <strong>1. Company Representation:</strong>
  
  - Employees must recognize that when using company resources to access the Internet, they represent Ebeyonds Pvt Ltd and must conduct themselves accordingly. This includes being respectful and professional in all communications, reflecting the values and image of the company.

  <strong>2. Prohibited Activities:</strong>
  
  The following activities are strictly prohibited, with no exceptions:
  
  - <strong><em>Email Spam:</em></strong> Sending unsolicited email messages, including "junk mail" or other advertising material to individuals who did not specifically request such material. This includes bulk email distributions without prior consent from recipients.
  
  - <strong><em>Harassment:</em></strong> Any form of harassment via email, telephone, or texting, whether through language, frequency, or size of messages, is strictly prohibited. This includes but is not limited to threats, abusive language, or unwanted repeated contact.
  
  - <strong><em>Forgery of Email Header Information:</em></strong> Unauthorized use or forging of email header information is not permitted. All email communications must accurately reflect the sender's identity.
  
  - <strong><em>Solicitation of Email:</em></strong> Soliciting email replies to any email address other than the sender's own, with the intent to harass or collect responses, is prohibited. This includes deceptive practices that aim to mislead recipients.
  
  - <strong><em>Chain Letters and Schemes:</em></strong> Creating or forwarding "chain letters," "Ponzi," or any other "pyramid" schemes is not allowed. Engaging in such activities is considered unethical and can lead to legal ramifications.
  
  - <strong><em>Unsolicited Email for Advertising:</em></strong> Use of unsolicited email originating from within Ebeyonds Pvt Ltd networks or other service providers to advertise any service hosted by or connected via Ebeyonds Pvt Ltd’s network is prohibited. This includes marketing any personal services or products.
  
  - <strong><em>Email Registration Restrictions:</em></strong> Employees shall not use their Ebeyonds Pvt Ltd email address to register on forums, surveys, or any social media platforms unless it is directly related to business operations. Any registration for external services should be reviewed and approved by management.

  <strong>3. Security Practices:</strong>

  - <strong><em>Email Security:</em></strong> Employees must ensure that all emails containing sensitive or confidential information are encrypted and marked as confidential. Use of secure email services or encryption tools is encouraged.
  
  - <strong><em>Phishing Awareness:</em></strong> Employees must be vigilant against phishing attacks and should not click on links or download attachments from unknown or suspicious sources. Any suspected phishing attempts must be reported to IT immediately.
  
  - <strong><em>Device Security:</em></strong> Employees accessing company email via mobile devices must ensure that these devices are secured with passwords or biometric authentication, and that security software is up to date.

  <strong>4. Compliance and Enforcement:</strong>
  
  - Employees must comply with this policy to maintain a professional and secure communication environment. Violations may result in disciplinary actions, including but not limited to loss of email privileges, mandatory training, or further disciplinary measures as deemed appropriate by management. Repeat violations will result in more severe consequences, which may include termination.

  - <strong><em>Reporting Violations:</em></strong> Employees are encouraged to report any violations of this policy to their immediate supervisor or the HR department. All reports will be taken seriously and investigated promptly.

  <strong>5. Training and Awareness:</strong>

  - <strong><em>Mandatory Training:</em></strong> All employees will receive mandatory training on this policy and the importance of proper email and communication practices during onboarding and at least annually thereafter.
  
  - <strong><em>Ongoing Communication:</em></strong> Regular reminders and updates regarding email security and acceptable communication practices will be communicated through company newsletters and intranet announcements.

  By adhering to the Email and Communication Activities Policy, employees contribute to a respectful and professional communication culture at Ebeyonds Pvt Ltd. Regular training and updates will be provided to ensure understanding and compliance with these guidelines.
  `
},
{
  id:9,
  title: 'Mobile Device Policy',
  content: `
  The Mobile Device Policy outlines the rules and requirements for the use of end-user devices, including mobile phones, tablets, laptops, and desktops, at Ebeyonds Pvt Ltd. This policy is designed to protect the integrity and security of the company’s information systems and sensitive data. All employees, contractors, and third parties are required to adhere to these guidelines.

  <strong>1. General Guidelines:</strong>
  
  - All end-user devices (both company-owned and personal devices used for business purposes, commonly referred to as Bring Your Own Device or BYOD) must comply with this policy.
  
  - Employees must exercise extreme caution when opening email attachments received from unknown senders, as these may contain malware or other harmful software.

  <strong>2. Password and Access Control:</strong>
  
  - System-level and user-level passwords must comply with the Access Control Policy. Employees must create strong passwords that meet complexity requirements.
  
  - Sharing passwords or providing access to another individual, either deliberately or through negligence, is strictly prohibited.

  <strong>3. Device Security Requirements:</strong>
  
  - All devices must be locked with a password, PIN, or equivalent control (e.g., biometric authentication) protected screensaver or screen lock after a maximum of 30 minutes of inactivity.
  
  - Devices must be locked whenever left unattended, even for short periods. Users must ensure that their devices are securely stored when not in use.

  - Users must report any suspected misuse, loss, or theft of a mobile device immediately to Ebeyonds Pvt Ltd’s IT Department. This ensures timely action can be taken to protect company data.

  <strong>4. Data Storage and Management:</strong>
  
  - Confidential information must not be stored on mobile devices or USB drives unless absolutely necessary. This restriction does not apply to basic business contact information (e.g., names, phone numbers, and email addresses).
  
  - Any mobile device used to access company resources, such as file shares and email, must not be shared with any other person. Employees must ensure their devices are used solely for authorized business activities.

  <strong>5. Compliance Upon Termination:</strong>
  
  - Upon termination or resignation, users agree to return all company-owned devices and securely delete all company-related information and accounts from any personal devices. This includes removing any access to company email or applications.

  <strong>6. Enforcement and Compliance:</strong>
  
  - Compliance with this policy is mandatory. Failure to adhere to these guidelines may result in disciplinary actions, including but not limited to loss of device access, mandatory training, or further disciplinary measures as deemed appropriate by management.
  
  - Regular audits and checks may be conducted by the IT Department to ensure compliance with this policy and assess the security of devices accessing company resources.

  <strong>7. Training and Awareness:</strong>
  
  - All employees will receive training on mobile device security as part of their onboarding process and ongoing security awareness programs. This training will cover safe usage practices, potential threats, and reporting procedures.

  By adhering to the Mobile Device Policy, employees contribute to maintaining the security and integrity of Ebeyonds Pvt Ltd’s information systems. Regular training and updates will be provided to ensure understanding and compliance with these guidelines.
  `
},
{
  id: 11,
  title: 'Network Policy',
  content: `
  The Network Policy establishes the guidelines for the appropriate use and management of network resources at Ebeyonds Pvt Ltd. This policy aims to protect the integrity, security, and reliability of the company's network infrastructure while ensuring compliance with applicable laws and regulations. All employees, contractors, and third parties must adhere to the standards set forth in this policy.

  <strong>1. Acceptable Use of Network Resources:</strong>
  
  - Network resources, including internet access, email, and file sharing, are provided for business purposes. Employees must use these resources responsibly and ethically.
  
  - Users must not engage in activities that disrupt or interfere with the normal operation of the network, including but not limited to:
    - Unauthorized access to network devices or accounts.
    - Introduction of malicious software, viruses, or worms.
    - Engaging in denial-of-service attacks or any other form of network abuse.

  <strong>2. Network Security:</strong>
  
  - All devices connected to the company's network must comply with the organization's security standards, including having up-to-date antivirus software and operating systems.
  
  - Users must not connect personal devices to the company’s network without prior approval from the IT Department.
  
  - Network segmentation must be implemented to separate sensitive information systems from other networks, reducing the risk of unauthorized access or data breaches.

  <strong>3. Remote Access:</strong>
  
  - Remote access to the company’s network is allowed only through approved methods, such as Virtual Private Network (VPN) connections.
  
  - Employees must use multi-factor authentication (MFA) when accessing the network remotely to enhance security.
  
  - Unauthorized remote access technologies, such as personal VPNs, must not be used.

  <strong>4. Monitoring and Logging:</strong>
  
  - The company reserves the right to monitor network traffic and log activities to ensure compliance with this policy and to protect against unauthorized access or abuse.
  
  - Users should have no expectation of privacy regarding their use of network resources. All data transmitted over the network may be subject to monitoring.

  <strong>5. Incident Response:</strong>
  
  - Any suspected network security incidents or breaches must be reported immediately to the IT Department for investigation and remediation.
  
  - Employees are required to cooperate with IT during any incident response efforts, including providing information or access as needed.

  <strong>6. Enforcement and Consequences:</strong>
  
  - Compliance with this policy is mandatory. Violations may result in disciplinary action, including termination, legal action, and/or criminal prosecution.
  
  - The IT Department will conduct regular audits to ensure compliance with this policy and assess the security of the network.

  <strong>7. Training and Awareness:</strong>
  
  - All employees will receive training on network security and acceptable use as part of their onboarding process and ongoing security awareness programs. This training will cover network risks, acceptable behaviors, and reporting procedures.

  By adhering to the Network Policy, employees contribute to maintaining the security, integrity, and reliability of Ebeyonds Pvt Ltd’s network resources. Regular updates and training will be provided to ensure compliance with these guidelines.
  `
},
{
  "id": 12,
  "title": "Change Management Policy",
  "content": `
  The Change Management Policy outlines the processes and guidelines for managing changes to the organization's IT infrastructure, applications, and services at Ebeyonds Pvt Ltd. The purpose of this policy is to ensure that changes are implemented in a controlled and systematic manner, minimizing the impact on services, security, and business operations.

  <strong>1. Change Request Process:</strong>
  - <strong><em>Change Initiation:</em></strong> Any employee may initiate a change request by submitting a Change Request Form to the Change Management Team.
  - <strong><em>Documentation:</em></strong> Each change request must include a description of the change, justification, impact analysis, risk assessment, and implementation plan.

  <strong>2. Change Classification:</strong>
  - <strong><em>Standard Changes:</em></strong> Routine changes that are pre-approved and do not require a risk assessment (e.g., software updates).
  - <strong><em>Normal Changes:</em></strong> Changes that require assessment, approval, and scheduling based on risk and impact.
  - <strong><em>Emergency Changes:</em></strong> Changes that must be implemented immediately to resolve an urgent issue, which must be documented and reviewed after implementation.

  <strong>3. Change Approval:</strong>
  - <strong><em>Change Advisory Board (CAB):</em></strong> The CAB will review and approve normal changes, assessing their impact and risk to the organization.
  - <strong><em>Emergency Change Review:</em></strong> Emergency changes must be documented and reviewed by the CAB within one week after implementation.

  <strong>4. Change Implementation:</strong>
  - <strong><em>Scheduling:</em></strong> Changes must be scheduled during non-peak hours to minimize disruption to business operations.
  - <strong><em>Communication:</em></strong> All relevant stakeholders must be informed of the scheduled changes and any potential impacts.

  <strong>5. Change Monitoring and Review:</strong>
  - <strong><em>Post-Implementation Review:</em></strong> A review must be conducted after each change to assess its success and impact, identifying any issues that arose during implementation.
  - <strong><em>Record Keeping:</em></strong> All change requests, approvals, and reviews must be documented and retained for auditing purposes.

  <strong>6. Enforcement and Consequences:</strong>
  - <strong><em>Compliance Monitoring:</em></strong> The Change Management Team will monitor compliance with this policy.
  - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Failure to adhere to this policy may result in disciplinary actions, including retraining or revocation of change management privileges.

  By following the Change Management Policy, employees contribute to the stability and security of the organization's IT environment.
  `
},
{
  "id": 13,
  "title": "Disaster Recovery and Business Continuity Policy",
  "content": `
  The Disaster Recovery and Business Continuity Policy establishes the framework and procedures to ensure the continued operation of critical business functions during and after a disaster at Ebeyonds Pvt Ltd. This policy aims to minimize disruptions, protect assets, and ensure a swift recovery.

  <strong>1. Purpose:</strong>
  - To define the organization's approach to disaster recovery and business continuity planning, ensuring that all employees understand their roles and responsibilities.

  <strong>2. Scope:</strong>
  - This policy applies to all employees, departments, and systems critical to business operations, including IT infrastructure, applications, and data.

  <strong>3. Risk Assessment:</strong>
  - A comprehensive risk assessment must be conducted regularly to identify potential threats and vulnerabilities to business operations, including natural disasters, cyber-attacks, and system failures.

  <strong>4. Business Impact Analysis (BIA):</strong>
  - A BIA must be conducted to evaluate the potential impact of disruptions on business operations and identify critical functions that require prioritization during recovery.

  <strong>5. Disaster Recovery Planning:</strong>
  - <strong><em>Recovery Strategies:</em></strong> Develop and maintain strategies to restore critical systems and data within defined recovery time objectives (RTO) and recovery point objectives (RPO).
  - <strong><em>Backup Procedures:</em></strong> Regular backups of critical data must be performed and stored securely offsite or in the cloud to ensure data integrity.

  <strong>6. Business Continuity Planning:</strong>
  - <strong><em>Continuity Procedures:</em></strong> Establish procedures to maintain essential business functions during a disaster, including alternative work arrangements and communication protocols.
  - <strong><em>Training and Awareness:</em></strong> All employees must receive training on business continuity procedures and their roles in the event of a disaster.

  <strong>7. Testing and Maintenance:</strong>
  - <strong><em>Regular Testing:</em></strong> The disaster recovery and business continuity plans must be tested at least annually to ensure effectiveness and identify areas for improvement.
  - <strong><em>Plan Maintenance:</em></strong> Plans must be reviewed and updated regularly to reflect changes in the organization, technology, and business processes.

  <strong>8. Communication:</strong>
  - A clear communication plan must be established to inform employees, stakeholders, and customers during a disaster, providing updates on recovery efforts and expected timelines.

  <strong>9. Enforcement and Consequences:</strong>
  - <strong><em>Compliance Monitoring:</em></strong> The Business Continuity Team will monitor adherence to this policy and conduct regular audits.
  - <span style="color: red; font-weight: bold"><em>Non-Compliance Consequences:</em></span> Failure to comply with this policy may result in disciplinary actions, including retraining or revocation of access to critical systems.

  By adhering to the Disaster Recovery and Business Continuity Policy, employees play a vital role in ensuring the resilience and sustainability of Ebeyonds Pvt Ltd in the face of unforeseen events.
  `
}


    
  ]);

  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (policyId) => {
    setExpanded(expanded === policyId ? null : policyId);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-[#1F2937] text-white shadow-md">
        <div className="p-4 flex items-center justify-center border-b border-gray-700">
          <img src={logo} alt="CYBERX Logo" className="h-24 w-24 object-contain" />
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/userdashboard" className="block px-4 py-2 text-lg font-semibold">
                Trainings
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/userpolicies" className="block px-4 py-2 text-lg font-semibold">
                Policies
              </Link>
            </li>
            <li className="hover:bg-[#1337aa] rounded-md">
              <Link to="/usersettings" className="block px-4 py-2 text-lg font-semibold flex items-center">
                <FiSettings className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Policies</h1>

        <section className="bg-white shadow-lg rounded-lg p-6">
          
          <div className="space-y-6">
            {policies.map((policy) => (
              <div key={policy.id} className="border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer" 
                  onClick={() => toggleAccordion(policy.id)}
                >
                  <h3 className="font-semibold text-xl text-gray-800">{policy.title}</h3>
                  <span className="text-gray-500">{expanded === policy.id ? '-' : '+'}</span>
                </div>
                {expanded === policy.id && (
                  <div className="border-t border-gray-200 p-4">
                    <p 
                      className="text-gray-600 whitespace-pre-wrap" 
                      dangerouslySetInnerHTML={{ __html: policy.content }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Policies;
