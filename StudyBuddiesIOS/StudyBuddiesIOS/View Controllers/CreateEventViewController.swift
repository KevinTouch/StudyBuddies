//
//  CreateEventViewController.swift
//  StudyBuddiesIOS
//
//  Created by Taran Thamrait on 2/1/20.
//  Copyright © 2020 HackUCI. All rights reserved.
//

import UIKit
import Firebase



class CreateEventViewController: UIViewController {
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var classTextField: UITextField!
    @IBOutlet weak var locationTextField: UITextField!
    @IBOutlet weak var timeTextField: UITextField!
    @IBOutlet weak var errorLabel: UILabel!
    @IBOutlet weak var createButton: UIButton!
    @IBOutlet weak var cancelButton: UIButton!
    
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        print("HERE")

        // Do any additional setup after loading the view.
        
        
        errorLabel.alpha = 0
    }
    
    
    
    
    func validateFields() -> String? {
        //Check that all fields are filled in
        if titleTextField.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" ||
            classTextField.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" ||
            locationTextField.text?.trimmingCharacters(in: .whitespacesAndNewlines) == "" ||
            timeTextField.text?.trimmingCharacters(in: .whitespacesAndNewlines) == ""
        {
            return "Please fill in all fields."
        }
        return nil
    }
    
    
    

    
    @IBAction func createTapped(_ sender: Any) {
        //Validate the fields
        let error = validateFields()


        if error != nil {
            showError(error!)
        }
        else {
            //Create cleaned versions of the fields
            let Title = titleTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
            let Class = classTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
            let Location = locationTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)
            let Time = timeTextField.text!.trimmingCharacters(in: .whitespacesAndNewlines)

            //Add the event to the Firebase DB
            let db = Firestore.firestore()
            
            db.collection("events").addDocument(data: ["class": Class,
                                                      "location": Location,
                                                      "time": Time,
                                                      "title": Title,
                                                      "participants": 1])
        }
        self.transitionToHome()
    }
    
    
    

    @IBAction func cancelTapped(_ sender: Any) {
    }

    
    
    
    func showError(_ message:String) {
        errorLabel.text = message
        errorLabel.alpha = 1
    }

    
    func transitionToHome() {
        
        let homeViewController = storyboard?.instantiateViewController(identifier: Constants.Storyboard.homeViewController) as? HomeViewController

        view.window?.rootViewController = homeViewController
        view.window?.makeKeyAndVisible()
    }
    
    

}
